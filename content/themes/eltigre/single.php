<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context         = Timber::context();
$timber_post     = Timber::query_post();
$context['post'] = $timber_post;
$context['glossaire_link'] = array(
	'label' => __( 'Retour au blog', 'eltigre' ),
	'url' 	=> get_permalink(128), // 128 est l'ID de la page recettes à metter dynamiquement.
);
$context['sharer'] = array(
	'facebook' 	=> 'https://www.facebook.com/sharer/sharer.php?u=' . get_permalink(),
	'twitter' 	=> 'https://twitter.com/intent/tweet?url=' . get_permalink(),
	'linkedin' 	=> 'https://www.linkedin.com/sharing/share-offsite/?url=' . get_permalink(),
);

if ( post_password_required( $timber_post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} elseif($timber_post->post_type == 'glossary'){
	Timber::render( 'single-def.twig', $context );
} else {
	Timber::render( array( 'single-' . $timber_post->ID . '.twig', 'single-' . $timber_post->post_type . '.twig', 'single-' . $timber_post->slug . '.twig', 'single.twig'), $context );
}
