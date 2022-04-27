<?php

namespace Eltigre\Services;
use Eltigre;

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! class_exists( 'Eltigre\Services\Support' ) ) {

	class Support extends Service {
	
		const NAME = 'Support';
		const VERSION = '1.0.0';

		public function __construct() {  
			parent::__construct( __DIR__ );

			add_action( 'admin_menu', array( __CLASS__, 'add_support_form' ) );
			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'enqueue_scripts' ) );
		}

		public static function enqueue_scripts( $hook ) {
			if ( $hook === 'toplevel_page_eltigre-support' ) {
				Eltigre::enqueue_directory( '/dist/services', 'support' );
			}
		}

		public static function add_support_form() {
			add_menu_page( 
				__( 'Support', 'eltigre' ), 
				__( 'Support', 'eltigre' ), 
				'edit_pages', 
				'eltigre-support', 
				array( __CLASS__, 'display_form' ), 
				'dashicons-superhero',
				99 
			);
		}

		public static function display_form() {  
			self::render( 'form' );
		}
	}
}