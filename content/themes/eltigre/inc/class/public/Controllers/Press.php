<?php

namespace Eltigre\Controllers;

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
                'order'             => "ASC",
                'posts_per_page'    => -1,
                'post_status'       =>"publish"
                
            );

            $query = new \WP_Query( $query_args );
            $press= array();

            while( $query->have_posts() ) {
                $query->the_post();
                $post_ID = get_the_ID();
                $acf_fields = get_fields($post_ID);
                
                $press_post = array(
                    'title'                 => get_the_title(),
                    'thumbnail'             => get_the_post_thumbnail(),
                    'content'               => get_the_content(),
                    'permalink'             => get_the_permalink(),
                    'author'                => get_the_author(),
                    'published_date'        => get_the_date(),
                    'press_date'            => get_field('presse_date'),
                    'press_author'          => get_field('presse_author'),
                    'press_link'            => get_field('cta'),
                );
                
                $press[ $post_ID ] = $press_post;
            }
            
            return $press;
        }
    }
}
