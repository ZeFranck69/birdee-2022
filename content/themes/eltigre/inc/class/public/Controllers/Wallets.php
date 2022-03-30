<?php

namespace Eltigre\Controllers;

if( !class_exists( 'Eltigre\Controllers\Wallets' ) ) {
    class Wallets {
        
        public static function get_context() {
            $context = array( 'wallets' => self::get_posts() );
            return $context;
        }
		
        public static function get_posts() {
            $query_args = array(
                'post_type'         => "wallet",
                'orderby'           => "menu_order",
                'order'             => "ASC",
                'posts_per_page'     => -1
            );

            $query = new \WP_Query( $query_args );
            $wallets = array();

            while( $query->have_posts() ) {
                $query->the_post();
                $post_ID = get_the_ID();
                $acf_fields = get_fields($post_ID);
                
                $wallet = array(
                    'title'                 => get_the_title(),
                    'thumbnail'             => get_the_post_thumbnail(),
                    'content'               => the_content(),
                    'permalink'             => get_the_permalink(),
                    'surtitle'              => $acf_fields['surtitle'],
                    'hook'                  => $acf_fields['title'],
                    'description'           => $acf_fields['description'],
                    'subjects'              => $acf_fields['subjects'],
                    
                );
                
                $wallets[ $post_ID ] = $wallet;
            }
            
            return $wallets;
        }
    }
}
