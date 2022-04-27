<?php

namespace Eltigre\Services;

if ( ! defined( 'ABSPATH' ) ) exit;


define( 'RECIPIENTS_ADMIN', 'admin' );
define( 'RECIPIENTS_GLOBAL_OPTIONS', 'global-options' );
define( 'RECIPIENTS_SECTION', 'section' );

class Contact extends Service {

    const VERSION = '1.0.0';
    const NAME = 'Contact';

    const RECIPIENTS_LOCATION = RECIPIENTS_ADMIN;

    public function __construct() {
        parent::__construct( __DIR__ );

        add_action('wp_ajax_eltigre_contact_send', array( __CLASS__, 'send' ) );
        add_action('wp_ajax_nopriv_eltigre_contact_send', array( __CLASS__, 'send' ) );
    }


    public static function send() {
        
        // Retrieve form fields
        $fields = self::get_fields();

        if ( self::validate_fields( $fields ) ) {

            // Format message
            $message = '';
            foreach ( $fields as $field ) {
                $message .= $field['label'] . ': ' . $field['value'] . "\n"; 
            }
            $message .= "Message: \n\n" . sanitize_textarea_field( $_POST['message'] );

    
            // Set E-Mail subject
            $subject = 'E-Mail Subject';
    
    
            // Set E-Mail recipients
            $recipients = self::get_recipients();
    
            // Build email headers
            $headers = array();
            $headers[] = 'Content-Type: text/html; charset=UTF-8';
            $headers[] = 'From: ' . get_bloginfo( 'name' ) . ' <site@wordpress.com>';
            $headers[] = 'Reply-To: ' . $fields['firstname']['value'] . ' ' . $fields['lastname']['value'] . ' <' . $fields['email']['value'] . '>';
    
    
            // Send email
            if ( wp_mail( $recipients, $subject, $message, $headers ) ) {
                wp_send_json_success(' Success message' );
            } else {
                wp_send_json_error( 'Error message' );
            }
    
    
            wp_die();
        }
    }


    private static function get_fields() {
        return array(
            'firstname' => array(
                'value' => isset( $_POST['firstname'] ) ? sanitize_text_field( $_POST['firstname'] ) : null,
                'label' => __( 'Prénom', 'eltigre' ),
                'required' => true
            ),
            'lastname' => array(
                'value' => isset( $_POST['lastname'] ) ? sanitize_text_field( $_POST['lastname'] ) : null,
                'label' => __( 'Nom', 'eltigre' ),
                'required' => true
            ),
            'email' => array(
                'value' => isset( T['email'] ) ? sanitize_email( $_POST['email'] ) : null,
                'label' => __( 'Prénom', 'eltigre' ),
                'required' => true
            )
        );
    }


    private static function validate_fields( $fields  = array() ) {
        foreach ( $fields as $key => $field ) {
            if ( $field['required'] && empty( $field['value'] ) ) {
                wp_send_json_error( "$key: cannot be empty" );
            }
        }

        return true;
    }

    private static function get_recipients() {
        switch ( self::RECIPIENTS_LOCATION ) {
            case RECIPIENTS_ADMIN: 
                return get_bloginfo( 'admin_email' );
            
            case RECIPIENTS_GLOBAL_OPTIONS:
                $recipients = array();
                $recipients_field = get_field( 'recipients', 'global-options' );
                if ( ! empty( $recipients_field ) ) {
                    foreach( $recipients_field as $recipient ) {
                        $recipients[] = $recipient[ 'email' ];
                    }
                }
                return $recipients;

            case RECIPIENTS_SECTION:
                return '';
        }
    }
}
