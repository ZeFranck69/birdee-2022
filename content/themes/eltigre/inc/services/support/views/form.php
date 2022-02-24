<div class="container-fluid container">
	<h1 class="title"><?php _e( 'Contactez-nous', 'eltigre' ); ?></h1>

	<form id="support-form" method="post">
		<div class="input-wrapper">
			<label style="display: block;" for="subject"><?php _e( 'Sujet', 'eltigre' ); ?></label>
			<input type="text" name="subject" />
		</div>

		<div class="input-wrapper">
			<label style="display: block;" for="subject"><?php _e( 'Message', 'eltigre' ); ?></label>
			<textarea name="message" placeholder="<?php _e( 'Message', 'eltigre' ); ?>"></textarea>
		</div>
	
		<?php submit_button( __( 'Envoyer', 'eltigre' ), 'secondary large' ); ?>
	</form>
</div>