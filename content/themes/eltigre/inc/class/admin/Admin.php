<?php

namespace Eltigre;

class Admin {
    
    public static $colors = array(

        '1D1D1B' => array( 'name' => 'black' ),
        'ffffff' => array( 'name' => 'white' ),
        'EEEEEE' => array( 'name' => 'grey' ),
		'F4F4FF' => array( 'name' => 'lightblue' ),
        '9294FB' => array( 'name' => 'blue' ),
		'69EFCA' => array( 'name' => 'green' ),
		'EF9CC5' => array( 'name' => 'pink' ),

	);

    public function __construct() {
        add_filter( 'tiny_mce_before_init', array( $this,'custom_wysiwyg_colors' ) );
        add_action( 'acf/input/admin_enqueue_scripts', array( $this, 'acf_color_picker_color_palette' ), 99 );
    }

    public function custom_wysiwyg_colors( $init ) {
        $colors = array();

        foreach( self::$colors as $hex => $color ) {
            if ( $color[ 'name' ] ) {
                array_push( $colors, "'$hex', '" . $color['name'] . "'" );
            }
        }

        $textcolor_map = implode( ',', $colors );

		$init['textcolor_map'] = '['.$textcolor_map.']';
		$init['textcolor_rows'] = 8; 
		
		return $init;
	}


    public function acf_color_picker_color_palette() { ?>
        <script id="color-palette" type="text/javascript">
            document.addEventListener("DOMContentLoaded", function() {
                acf.add_filter('color_picker_args', function( args, field ) {    
                    args.palettes = [<?php foreach( self::$colors as $hex => $color ) echo "'#$hex',"; ?>];
                    return args;
                });
            });
        </script><?php
    }

    
}

new Admin();
