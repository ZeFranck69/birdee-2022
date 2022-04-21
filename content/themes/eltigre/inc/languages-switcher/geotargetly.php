<?php

define( 'BIRDEE_COOKIES', array(
    'COUNTRY' => 'wordpress_country_preference',
    'LANGUAGE' => 'wordpress_language_preference' 
) );

if ( ! empty( $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ] ) && ! empty( $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ] ) ) {
    add_action( 'template_redirect', 'redirect_to_cookie_language' ); 

    function redirect_to_cookie_language( ) {
        global $wp;

        if ( is_404() || is_admin() || wp_doing_ajax() ) return;
        
        $params_to_keep = array(
            'utm_source',
            'utm_campaign',
            'utm_medium'
        );

        $current_url = home_url( $wp->request );
        $strict_url = ! empty( $wp->request );
        $redirect_url = untrailingslashit( apply_filters( 'wpml_permalink', $current_url , $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ] . '-' . $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ], $strict_url ) );
        $redirect_with_params = $redirect_url;

        foreach ( $params_to_keep as $name ) {
            if ( isset( $_GET[ $name ] ) && ! empty( $_GET[ $name ] ) ) {
                $redirect_with_params = add_query_arg( array(
                    $name => $_GET[ $name ]
                ), $redirect_with_params );
            }
        }

        if ( strpos( $current_url, $redirect_url ) === false ) {
            wp_redirect( $redirect_with_params );
            exit();
        }
    }
} else {
    add_action( 'wp_enqueue_scripts', 'enqueue_geotargetly' );
    function enqueue_geotargetly() {
        // GEOTARGETING
        wp_enqueue_script( 'geo', get_template_directory_uri() . '/dist/geotargetly.js', '', '', true ); 
        wp_localize_script( 'geo', 'wp_geo', array(
            'languages' => icl_get_languages(),
        ) );
        wp_localize_script( 'geo', 'birdeeCookies', BIRDEE_COOKIES );
    }
    
    
    add_action( 'wp_footer', 'add_geotargetly_script', 99 );
    function add_geotargetly_script() { 
        // if ( ! defined( 'GEOTARGETLY_URL' ) ) return;   
    ?>
        <script>
            (function(g,e,o,t,a,r,ge,tl,y){
            t=g.getElementsByTagName(e)[0];y=g.createElement(e);y.async=true;
            y.src='https://g1386590346.co/gl?id=-MvJcPYIhpDg1fd7q67Q&refurl='+g.referrer+'&winurl='+encodeURIComponent(window.location);
            t.parentNode.insertBefore(y,t);
            })(document,'script');
        </script>
        <?php
    }
}


// if ( ! empty( $_GET[ 'language-redirect' ] ) ) {
//     add_action( 'get_footer', 'render_language_popup' );
//     function render_language_popup() {
//         ob_start();
//         include_once get_template_directory() . '/parts/language-popup.php';
//         echo ob_get_clean();
//     }
// }

