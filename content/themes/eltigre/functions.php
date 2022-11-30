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
			
			// Landing mode
			$context['landing_mode'] 	= get_field( 'landing_mode' );
			$context['landing_logo'] 	= get_field( 'landing_logo' );
			$context['landing_link'] 	= get_field( 'landing_link' );
			
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

			return apply_filters( 'eltigre_context', $context );
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
						'all_items'     => __( 'Toutes les offres', 'eltigre' ),
						'edit_item'     => __( 'Modifier une offre', 'eltigre' ),
						'view_item'     => __( 'Voir une offre', 'eltigre' ),
						'update_item'   => __( 'Mettre à jour une offre', 'eltigre' ),
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
			register_post_type( 'press',
				array(
					'labels' => array(
						'name'          => __( 'Articles de presse', 'eltigre' ),
						'add_new'		=> __( 'Ajouter un article de presse', 'eltigre' ),
						'singular_name' => __( 'Article de presse', 'eltigre' ),
						'all_items'     => __( 'Tous les articles de presse', 'eltigre' ),
						'edit_item'     => __( 'Modifier un article de presse', 'eltigre' ),
						'view_item'     => __( 'Voir un article de presse', 'eltigre' ),
						'update_item'   => __( 'Mettre à jour un article de presse', 'eltigre' ),
						'add_new_item'  => __( 'Ajouter un nouvel article de presse', 'eltigre' ),
						'search_items'  => __( 'Chercher un article de presse', 'eltigre' ),
						'popular_items' => __( 'Articles de presse les plus utilisés', 'eltigre' )
					),
					'rewrite'     => array( 'slug' => 'press' ),
					'menu_icon'   => 'dashicons-format-aside',
					'supports'    => array( 'title', 'editor', 'thumbnail' ),
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
				'intercom_id' => getenv( 'INTERCOM_ID' ),
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
   




add_action( 'wp_head', 'init_segment', 99 );
function init_segment() { 
    if ( ! function_exists( 'getenv' ) || empty( getenv( 'SEGMENT_KEY' ) ) ) return null; 
	?>
    <script>
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="YOUR_WRITE_KEY";analytics.SNIPPET_VERSION="4.13.2";
        analytics.load("<?php echo getenv( 'SEGMENT_KEY' ); ?>");
        analytics.page();
        }}();
    </script><?php
}


add_action( 'wp_head', 'init_axeptio', 99 );
function init_axeptio() {
    $language_country_code = ICL_LANGUAGE_CODE;
    if ( empty( $language_country_code ) || ! is_string( $language_country_code ) ) 
        return;
    
    $country_code = strtoupper( explode( '-', $language_country_code )[0] ?? '' );
    if ( empty( $country_code ) ) 
        return;
    ?>

    <script>
        window.axeptioSettings = {
          clientId: "615ae7e4cedca549d17bd940",
          cookiesVersion: "custom_<?php echo $country_code; ?>",
        };
         
        (function(d, s) {
          var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
          e.async = true; e.src = "//static.axept.io/sdk.js";
          t.parentNode.insertBefore(e, t);
        })(document, "script");
    </script>
    <?php
}

add_filter( 'wpml_hreflangs', 'wps_head_hreflang_xdefault_remove' );
function wps_head_hreflang_xdefault_remove($hreflangs){
    foreach ($hreflangs as $key => $lang)
    {
        if ($key == "x-default"){
            unset ($hreflangs[$key]);
        }
    }
    return $hreflangs;
}

add_filter('wpml_alternate_hreflang', 'wps_head_hreflang_xdefault', 10, 2);
function wps_head_hreflang_xdefault($url, $lang_code) {
      
    if($lang_code == apply_filters('wpml_default_language', NULL )) {
          
        // echo '<link rel="alternate" href="' . $url . '" hreflang="x-default"/>'.PHP_EOL;
        echo '<link rel="alternate" href="https://birdee.co/en-eu/" hreflang="x-default"/>'.PHP_EOL;
    }
      
    return $url;
}
//Remove shortlink in head
add_filter('after_setup_theme', 'remove_shortlink_head');
function remove_shortlink_head() {
remove_action('wp_head', 'wp_shortlink_wp_head', 10);
remove_action( 'template_redirect', 'wp_shortlink_header', 11);
}