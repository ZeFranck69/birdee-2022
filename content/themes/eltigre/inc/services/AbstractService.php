<?php

namespace Eltigre\Services;

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! class_exists( 'Eltigre\Services\Service' ) ) {

	abstract class Service {

    private static $service_path;

    public function __construct( $dir = __DIR__ ) {
      self::$service_path = $this->get_service_path( $dir );
    }


    public static function get_service_path( $dir ) {
      return trailingslashit( $dir );
    }


    public static function render( $view ) {
      $template = self::$service_path . "views/$view.php";
      if ( file_exists( $template ) ) {
        include $template;
      }
    }
  }
}