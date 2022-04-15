<?php
/**
 * El-Tigre functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Eltigre
 */

 if ( ! defined( 'ABSPATH' ) ) exit;

 require_once 'inc/timber-init.php';
 
 if ( class_exists( 'Timber' ) ) {
	require_once 'inc/helper-functions.php';
	require_once 'inc/constants/colors.php';
	require_once 'inc/class/Eltigre.php';
	require_once 'inc/languages-switcher/index.php';
	
	class Init extends Timber\Site {
   
		public function __construct() {
			add_action( 'wp_head', array( $this, 'set_meta_description' ), 10, 1 );
			add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
			add_action( 'init', array( $this, 'register_post_types' ) );
			add_action( 'init', array( $this, 'register_taxonomies' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ));
	
			add_filter( 'timber/context', array( $this, 'add_to_context' ) );
			

			parent::__construct();
		}



		public static function set_meta_description() { 
			if ( class_exists( 'WPSEO_Options') ) {
				$yoast_description = get_post_meta( get_the_ID(), '_yoast_wpseo_metadesc', true );
				if ( !empty( $yoast_description ) ) {
					return null;
				}
			}

			?><meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>"><?php
		}
	
	
		/** This is where you add some context
			*
			* @param string $context context['this'] Being the Twig's {{ this }}.
			*/
		public function add_to_context( $context ) {
			
			// Menus
			$context['menu']  = new Timber\Menu();
			
			// Logo
			$logo_ID 				= get_theme_mod( 'custom_logo' );
			$context['logo'] 		= wp_get_attachment_image( $logo_ID , '', false, array( 'class' => 'site-logo' ) );
			$context['logo_src']	= wp_get_attachment_image_src( $logo_ID , 'full' )[0];

			// Global options
			$context['options'] 	= get_fields( 'options' );

			// Menus
			$context['menu'] = array(
				'header' => array(
					'left' 	=> new Timber\Menu( 'Header Left' ),
					'right' => new Timber\Menu( 'Header Right' )
				),
				'footer' => array(
					'birdee' 	=> new Timber\Menu( 'Footer Birdee' ),
					'help' 		=> new Timber\Menu( 'Footer Help' ),
					'about' 	=> new Timber\Menu( 'Footer About' )
				),
			);
			$context['menuHeader']  = new Timber\Menu('Menu Header');
	
			// Global site
			$context['site']  = $this;
			return $context;
		}
	
	
		public function register_post_types() {
			/** This is where you can register custom post types. */
			register_post_type( 'collaborator',
				array(
					'labels' => array(
						'name'          => __( 'Collaborateurs', 'eltigre' ),
						'add_new'		=> __( 'Ajouter un collaborateur', 'eltigre' ),
						'singular_name' => __( 'Collaborateur', 'eltigre' ),
						'all_items'     => __( 'Tous les collaborateurs', 'eltigre' ),
						'edit_item'     => __( 'Modifier un collaborateur', 'eltigre' ),
						'view_item'     => __( 'Voir un collaborateur', 'eltigre' ),
						'update_item'   => __( 'Mettre à jour un collaborateur', 'eltigre' ),
						'add_new_item'  => __( 'Ajouter un nouveau collaborateur', 'eltigre' ),
						'search_items'  => __( 'Chercher un collaborateur', 'eltigre' ),
						'popular_items' => __( 'collaborateurs les plus utilisés', 'eltigre' )
					),
					'rewrite'     => array( 'slug' => 'collaborator' ),
					'menu_icon'   => 'dashicons-businessperson',
					'supports'    => array( 'title', 'editor', 'thumbnail' ),
					'public'      => true,
					'has_archive' => false
				)
			);

			register_post_type( 'wallet',
				array(
					'labels' => array(
						'name'          => __( 'Portefeuilles', 'eltigre' ),
						'add_new'		=> __( 'Ajouter un portefeuille', 'eltigre' ),
						'singular_name' => __( 'Portefeuille', 'eltigre' ),
						'all_items'     => __( 'Tous les portefeuilles', 'eltigre' ),
						'edit_item'     => __( 'Modifier un portefeuille', 'eltigre' ),
						'view_item'     => __( 'Voir un portefeuille', 'eltigre' ),
						'update_item'   => __( 'Mettre à jour un portefeuille', 'eltigre' ),
						'add_new_item'  => __( 'Ajouter un nouveau portefeuille', 'eltigre' ),
						'search_items'  => __( 'Chercher un portefeuille', 'eltigre' ),
						'popular_items' => __( 'Portefeuilles les plus utilisés', 'eltigre' )
					),
					'rewrite'     => array( 'slug' => 'wallet' ),
					'menu_icon'   => 'dashicons-portfolio',
					'supports'    => array( 'title', 'editor', 'thumbnail' ),
					'public'      => true,
					'has_archive' => false
				)
			);

			register_post_type( 'offers',
				array(
					'labels' => array(
						'name'          => __( 'Offres', 'eltigre' ),
						'add_new'		=> __( 'Ajouter une offre', 'eltigre' ),
						'singular_name' => __( 'Offre', 'eltigre' ),
						'all_items'     => __( 'Toutes les Offres', 'eltigre' ),
						'edit_item'     => __( 'Modifier une Offre', 'eltigre' ),
						'view_item'     => __( 'Voir une Offre', 'eltigre' ),
						'update_item'   => __( 'Mettre à jour une Offre', 'eltigre' ),
						'add_new_item'  => __( 'Ajouter une nouvelle offre', 'eltigre' ),
						'search_items'  => __( 'Chercher une offre', 'eltigre' ),
						'popular_items' => __( 'Offres les plus utilisés', 'eltigre' )
					),
					'rewrite'     => array( 'slug' => 'offers' ),
					'menu_icon'   => 'dashicons-businessperson',
					'supports'    => array( 'title', 'thumbnail' ),
					'public'      => true,
					'has_archive' => false
				)
			);
		}
	
	
		public function register_taxonomies() {
			/** This is where you can register custom taxonomies. */
		}
	
	
		public function enqueue() {
			// SWIPER
			wp_enqueue_style( 'swiper', 'https://unpkg.com/swiper/swiper-bundle.min.css' );
			wp_enqueue_script( 'swiper', 'https://unpkg.com/swiper/swiper-bundle.min.js' );

			//FA
			wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/inc/vendor/css/fontawesome.min.css' );
			wp_enqueue_style( 'fa-brands', get_template_directory_uri() . '/inc/vendor/css/brands.min.css' );
	
			// CUSTOM
			Eltigre::enqueue_directory( '/dist', 'app' );
			wp_localize_script( 'app', 'site', array(
				'url' 		=> home_url(),
				'ajaxurl' 	=> admin_url( 'admin-ajax.php' ),
				'theme_url' => get_template_directory_uri(),
				'translations' => array(
					'contact' => array(
						'message_sent' => __( 'Message envoyé', 'eltigre' ),
						'error' => __( 'Une erreur est survenue', 'eltigre' )
					)
				)
			));
		}

		public function theme_supports() {
			load_theme_textdomain( 'eltigre', get_template_directory() . '/languages' );

			// Adds ACF global options page
			if ( function_exists('acf_add_options_page') ) {
				acf_add_options_page('Global options');	
			}
	
			add_theme_support( 'automatic-feed-links' );
			add_theme_support( 'menus' );
			add_theme_support( 'title-tag' );
			add_theme_support( 'post-thumbnails' );
			add_theme_support( 'custom-logo' );
			add_theme_support(
				'html5',
				array(
					'comment-form',
					'comment-list',
					'gallery',
					'caption',
				)
			);
	
			/*
				* Enable support for Post Formats.
				*
				* See: https://codex.wordpress.org/Post_Formats
				*/
			add_theme_support(
				'post-formats',
				array(
					'image',
					'video',
					'quote',
					'link',
					'gallery',
					'audio',
				)
			);
		}

		
	}

	new Init();
}
   


