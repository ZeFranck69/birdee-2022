<?php

namespace Eltigre\Services;
use Eltigre;
if ( ! defined( 'ABSPATH' ) ) exit;

define( 'BIRDEE_COOKIES', array(
    'COUNTRY' => 'wordpress_country_preference',
    'LANGUAGE' => 'wordpress_language_preference' 
) );

class Multilang extends Service {

    const VERSION = '1.0.0';
    const NAME = 'Multilang';

    public function __construct() {
        parent::__construct( __DIR__ );


        if ( ! empty( $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ] ) && ! empty( $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ] ) ) {
            add_action( 'template_redirect', array( __CLASS__, 'redirect_to_cookie_language' ) ); 
        } else {
            add_action( 'wp_enqueue_scripts',array(  __CLASS__, 'enqueue_scripts' ) );
            add_action( 'wp_footer', array( __CLASS__, 'add_geotargetly_script' ), 99 );
        }

        add_action('wp_languages_switcher',  array( __CLASS__, 'languages_switcher' ) );
        add_filter( 'timber/context', array( __CLASS__, 'add_language_banner_to_context' ) );

    }


    public static function add_language_banner_to_context( $context ) {
        if ( ! empty( $_GET[ 'language-redirect' ] ) ) {
            ob_start();
            include __DIR__ . '/template/language-banner.php';
            $content = ob_get_clean();
            $context[ 'language_banner' ] = $content;
        }
        return $context;
    }

    public static function redirect_to_cookie_language( ) {
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

        if ( untrailingslashit( $current_url ) !==  untrailingslashit( $redirect_url ) ) {
            wp_redirect( $redirect_with_params );
            exit();
        }
    }

    public static function enqueue_scripts() {
        Eltigre::enqueue_directory( '/dist', 'geotargetly' );
        // wp_enqueue_script( 'geo', get_template_directory_uri() . '/dist/geotargetly.js', '', '', true ); 
        wp_localize_script( 'geotargetly', 'wp_geo', array(
            'languages' => icl_get_languages(),
        ) );

        wp_localize_script( 'geotargetly', 'birdeeCookies', BIRDEE_COOKIES );
    }

    public static function add_geotargetly_script() { 
        $geotargetly_url = getenv( 'GEOTARGETLY_URL' );
         if ( empty( $geotargetly_url ) ) return; ?>

        <script>
            (function(g,e,o,t,a,r,ge,tl,y){
            t=g.getElementsByTagName(e)[0];y=g.createElement(e);y.async=true;
            y.src="<?php echo $geotargetly_url; ?>&refurl="+g.referrer+"&winurl="+encodeURIComponent(window.location);
            t.parentNode.insertBefore(y,t);
            })(document,'script');
        </script>
        <?php
    }

    public static function languages_switcher() {
        $translation_country    = self::getTranslateCountry();
        $translation_languages  = self::getTranslateLanguages();
        $currentLangueInfos     = self::get_language_country_info();
        $languagesAll           = icl_get_languages('skip_missing=0');

        include __DIR__ . '/template/language-switcher.php';
    }
    
    private static function getTranslateCountry(){
        $translation_country = array(
            'eu' => array( 
                'label' => __('Europe', 'eltigre'), 
                'flag' => '/src/images/flags/eu.svg' 
            ),
            'fr' => array( 
                'label' => __('France', 'eltigre') , 
                'flag' => '/src/images/flags/fr.svg' 
            ),
            'be' => array( 
                'label' => __('Belgium', 'eltigre'), 
                'flag' => '/src/images/flags/be.svg' 
            ),
            'lu' => array( 
                'label' => __('Luxembourg', 'eltigre'), 
                'flag' => '/src/images/flags/lu.svg' 
            ),
        );
        return $translation_country;
    }

     private static function getTranslateLanguages(){
        $translation_languages = array(
            'fr'=> __( 'French', 'eltigre' ),
            'nl' => __( 'Dutch', 'eltigre' ),
            'en' => __( 'English', 'eltigre' ),
        );
        return  $translation_languages;
    }
    
    
     private static function get_language_country_info() {

        try {
            $language_code = explode( '-', ICL_LANGUAGE_CODE )[0];
            $country_code = explode( '-', ICL_LANGUAGE_CODE )[1];
            $languages = self::getTranslateLanguages();
            $countries = self::getTranslateCountry();

            $language = isset( $languages[ $language_code ] ) ? $languages[ $language_code ] : '';
            $flag = ! empty( $countries[ $country_code ] ) ? $countries[ $country_code ][ 'flag' ] : '';

            return array(
                'lang' => $language,
                'flag' => $flag
            );
        } catch (Exception $e) { 
            return false;
        }
    }
}
