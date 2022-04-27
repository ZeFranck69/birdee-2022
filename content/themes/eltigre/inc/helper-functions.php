<?php

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! function_exists( 'debug' ) ) {
	function debug( $data, $die = true ) {
		if ( ! defined( 'WP_DEBUG' ) || ! WP_DEBUG ) 
			return;

		echo '<pre>';
		var_dump( $data );
		echo '</pre>';

		if ( $die ) wp_die();
	}
}

if ( ! function_exists( 'get_services_directory' ) ) {
	function get_services_directory( ) {
		return get_template_directory() . '/inc/services';
	}
}


if ( !function_exists( 'get_paged_query_param' ) ) {
	function get_paged_query_param() {
		if ( get_query_var( 'paged' ) ) {
			return get_query_var( 'paged' );
		} else if ( get_query_var( 'page' ) ) {
			return get_query_var('page' );
		}

		return 1;
	}
}