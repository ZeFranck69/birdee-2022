<?php

if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'template_redirect', 'check_timber_activated' , 0 );
function check_timber_activated() {
	if ( ! class_exists( 'Timber'  ) ) {
		wp_die( sprintf( __( 'This theme can\'t work without Timber plugin. <a href="%s">Please login to admin</a>, and activate it !', 'eltigre' ), esc_url( wp_login_url() ) ) );
	}
}

if ( ! class_exists( 'Timber' ) ) {
	add_action(
		'admin_notices',
		function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		}
	);
} else {
	/**
	 * Sets the directories (inside your theme) to find .twig files
	 */
	Timber::$dirname = array( 'templates', 'views' );
	
	/**
	 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
	 * No prob! Just set this value to true
	 */
	Timber::$autoescape = false;
}

