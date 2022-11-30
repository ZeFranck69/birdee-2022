<?php

namespace Eltigre\Controllers;

if( !class_exists( 'Eltigre\Controllers\Glossary' ) ) {

    class Glossary {

        public function __construct() {
            add_action( 'pre_get_posts', array( __CLASS__, 'modify_query' ), 10, 1 );
        }
        
        public static function modify_query( $query ) {
            if ( is_admin() || ! $query->is_main_query() ) {
                return;
            }

            // if ( $query->query[ 'post_type' ]  === 'glossary' || ! empty( $query->query[ 'theme' ] ) ) {
            //     $query->set( 'orderby', 'menu_order' );
            //     $query->set( 'order', 'ASC' );
            //     $query->set( 'posts_per_page', 9 );
            // }
        }


        public static function get_context() {
         
            $context = array(
                'definition'    => self::get_posts(),
                'themes'        => self::get_taxonomy( 'theme' )  
            ); 
           
            return $context;

        }
		public static function get_posts() {
          
            $query_args = array(
                'post_type'         => "glossary",
                'orderby'           => "menu_order",
                'order'             => "ASC",
                'posts_per_page'     => -1
            );
            
            $query = new \WP_Query( $query_args );
            $definition = array();

            while( $query->have_posts() ) {
                $query->the_post();
                $post_ID = get_the_ID();
                $acf_fields = get_fields($post_ID);
                
                $definition = array(
                    'title'                 => get_the_title(),
                    'thumbnail'             => get_the_post_thumbnail(),
                    'content'               => get_the_content(),
                    'permalink'             => get_the_permalink(),
                );
                
                $definitions[ $post_ID ] = $definition;
            }
            return $definitions;
        }


        public static function get_taxonomy( $tax = 'theme' ){
            $terms = get_terms( $tax , array(
                'hide_empty' => false,
                'orderby'    => "menu_order",
                'order'    => "ASC",
            ));

            $formatted_terms = array();
            foreach ( $terms as $term ){
                $formatted_terms[$term->slug] = array(
                    'term_id'   => $term->term_id,
                    'name'      => $term->name,
                    'term'      => strtolower($term->name),
                    'permalink' => get_term_link($term->term_id),
                    'picto'     => get_field( 'picto', $tax . '_' .$term->term_id )
                );
            }
            return $formatted_terms;
        }
    }

    new Glossary();
}