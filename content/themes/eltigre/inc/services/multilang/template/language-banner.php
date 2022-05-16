<div class="birdee__language-redirect">
    <div class="container">
        <p class="birdee-country-popup__title">
            <?php _e( 'Nous vous avons redirigé automatiquement vers l’offre Birdee correspondant à votre localisation. Cela ne vous convient pas ? Vous pouvez changer de langue en choisissant dans la liste ci-contre.', 'eltigre' ); ?>
        </p>

        <?php do_action( 'wp_languages_switcher' ); ?>
        
        <div class="close-notice">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/nav/close.svg" alt="">
        </div>
    </div>
</div>