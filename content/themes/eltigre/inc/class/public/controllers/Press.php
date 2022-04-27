<?php

namespace Eltigre\Controllers;
use Timber\PostQuery;

if( !class_exists( 'Eltigre\Controllers\Press' ) ) {
    class Press {
        
        public static function get_context() {
            $context = array( 'press_posts' => self::get_posts() );
            return $context;
        }
		
        public static function get_posts() {
            $query_args = array(
                'post_type'         => "press",
                'orderby'           => "menu_order",
                'order'             => "DESC",
                'posts_per_page'    => 10,
                'paged'             => get_paged_query_param(),
                'post_status'       =>"publish"
                
            );

            $posts = new PostQuery( $query_args );


            return $posts;
        }
    }

    new Press();
}
