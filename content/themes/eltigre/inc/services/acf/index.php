<?php

namespace Eltigre\Services;

if ( ! defined( 'ABSPATH' ) ) exit;


if ( ! class_exists( 'Eltigre\Services\ACF' ) ) {

  class ACF extends Service {
  
      const VERSION = '1.0.0';
      const NAME = 'ACF';

      public function __construct() {
        add_action( 'template_redirect', array( __CLASS__, 'check_acf_activated' ), 0 );
        add_action( 'admin_notices', array( __CLASS__, 'admin_notices' ) );
        add_filter( 'tiny_mce_before_init', array( __CLASS__,'custom_wysiwyg_colors' ) );
        add_filter( 'acf/fields/wysiwyg/toolbars', array( __CLASS__,'custom_tinymce_toolbars' ) );
        add_action( 'acf/input/admin_enqueue_scripts', array( __CLASS__, 'enqueue_scripts' ) );
      }

      public static function check_acf_activated() {
        if ( ! function_exists( 'get_field' ) ) {
          wp_die( sprintf( __( 'This theme can\'t work without ACF plugin. <a href="%s">Please login to admin</a>, and activate it !', 'eltigre' ), esc_url( wp_login_url() ) ) );
        }
      }

      public static function admin_notices() {
        if ( ! function_exists( 'get_field' ) ) {
          echo '<div class="error"><p>ACF not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#acf' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
        }
      }


      public static function enqueue_scripts() {
        wp_enqueue_script ( 'eltigre-' . self::NAME, get_stylesheet_directory_uri() . '/dist/services/acf.js' );
        wp_localize_script( 'eltigre-' . self::NAME, 'acfAdminColors', COLORS );
      }

      public static function custom_tinymce_toolbars( $toolbars ) {
        return $toolbars;
      }

      public static function custom_wysiwyg_colors( $init ) {
          $colors = array();
          foreach( COLORS as $hex => $color ) {
              if ( $color[ 'name' ] ) {
                  array_push( $colors, "'$hex', '" . $color['name'] . "'" );
              }
          }
  
          $textcolor_map = implode( ',', $colors );
  
      $init['textcolor_map'] = '['.$textcolor_map.']';
      $init['textcolor_rows'] = 8; 
      
      return $init;
    }
  }
}