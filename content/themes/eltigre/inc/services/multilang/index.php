<?php

namespace Eltigre\Services;

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

        if ( strpos( $current_url, $redirect_url ) === false ) {
            wp_redirect( $redirect_with_params );
            exit();
        }
    }

    public static function enqueue_scripts() {
        wp_enqueue_script( 'geo', get_template_directory_uri() . '/dist/geotargetly.js', '', '', true ); 
        wp_localize_script( 'geo', 'wp_geo', array(
            'languages' => icl_get_languages(),
        ) );
        wp_localize_script( 'geo', 'birdeeCookies', BIRDEE_COOKIES );
    }

    public static function add_geotargetly_script() { 
        // if ( ! defined( 'GEOTARGETLY_URL' ) ) return; ?>

        <script>
            (function(g,e,o,t,a,r,ge,tl,y){
            t=g.getElementsByTagName(e)[0];y=g.createElement(e);y.async=true;
            y.src='https://g1386590346.co/gl?id=-MvJcPYIhpDg1fd7q67Q&refurl='+g.referrer+'&winurl='+encodeURIComponent(window.location);
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
    
    
     private static function getCurrentLanguageInfos(){
        $translation_country    = self::getTranslateCountry();
        $translation_languages  = self::getTranslateLanguages();
        $currentLang            = (function_exists('icl_object_id')) ? ICL_LANGUAGE_CODE : 'en-eu';
        $currentLangueInfos     = array();

        preg_match('#(.+)-(.+)#',$currentLang,$langCountryTab);
    
        if(isset($langCountryTab[1])){
            if(array_key_exists($langCountryTab[1],$translation_languages)){
                $currentLangueInfos['lang'] = $translation_languages[$langCountryTab[1]];
                $currentLangueInfos['langcode'] = $langCountryTab[1];
            }
        }
        if(isset($langCountryTab[2])){
            if(array_key_exists($langCountryTab[2],$translation_country)){
    
                $currentLangueInfos['country'] = $translation_country[$langCountryTab[2]]['label'];
                $currentLangueInfos['countrycode'] = $langCountryTab[2];
                $currentLangueInfos['flag'] = $translation_country[$langCountryTab[2]]['flag'];
            }
        }
        return $currentLangueInfos;
    }
    
     private static function get_language_country_info() {
        if ( ! empty( $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ] ) && ! empty( $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ] ) ) {
            $languages = self::getTranslateLanguages();
            $countries = self::getTranslateCountry();

            $language = isset( $languages[ $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ] ] ) ? $languages[ $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ] ] : '';
            $flag = ! empty( $countries[ $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ] ] ) ? $countries[ $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ] ][ 'flag' ] : '';

            return array(
                'lang' => $language,
                'flag' => $flag
            );
        }
    }

}