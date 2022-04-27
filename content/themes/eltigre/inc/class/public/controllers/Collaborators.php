<?php

namespace Eltigre\Controllers;

if( !class_exists( 'Eltigre\Controllers\Collaborators' ) ) {
    class Collaborators {
        public static function get_context() {
            $context = array( 'collaborators' => self::get_posts() );
            return $context;
        }
		
        public static function get_posts() {
            $query_args = array(
                'post_type'         => "collaborators",
                'orderby'           => "menu_order",
                'order'             => "ASC",
                'posts_per_page'     => -1
            );

            $query = new \WP_Query( $query_args );
            $collaborators = array();

            while( $query->have_posts() ) {
                $query->the_post();
                $post_ID = get_the_ID();
                $acf_fields = get_fields();

                $collaborator = array(
                    'title'                 => get_the_title(),
                    'thumbnail'             => get_the_post_thumbnail(),
                    'content'               => the_content(),
                    'permalink'             => get_the_permalink(),
                    'photo'                 => $acf_fields['photo'],
                    'position'              => $acf_fields['position'],
                    'link'                  => $acf_fields['link'],
                    'quote'                 => $acf_fields['quote'],
                );

                
                $collaborators[ $post_ID ] = $collaborator;
            }
            return $collaborators;

        }
    }
}
