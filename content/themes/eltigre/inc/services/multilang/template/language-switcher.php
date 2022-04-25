<div class="language-switcher">
    <span class="title"><?php echo __('Language / Pays : ', 'birdee' ); ?></span>

    
    <?php if ($translation_country ) :?>
        <div class="language-switcher__languages">
            <?php if( $currentLangueInfos ): ?>
                <div class="language-switcher__active">
                    <span class="langTitle">
                        <span class="flag">
                            <img src="<?php echo get_template_directory_uri() . $currentLangueInfos['flag']; ?>" class="dd-selected-image">
                        </span>
                        <?php echo $currentLangueInfos['lang']; ?>
                    </span>
                </div>
            <?php endif; ?>
            
            
            <ul class="country-list">
                <?php foreach( $translation_country as $keyc => $country ): ?>
                    <?php if( isset( $languagesAll[ 'fr-'. $keyc ] ) || isset( $languagesAll[ 'en-'.$keyc ] ) || isset( $languagesAll[ 'nl-'.$keyc ] ) ) : ?>
                        <li data-country="<?php echo $keyc; ?>">
                            <span class="langTitle">
                                <span class="flag"><img src="<?php echo get_template_directory_uri().$country['flag']; ?>" class="dd-selected-image"></span>
                                <?php echo $country['titre']; ?>
                            </span>
                            
                            <?php if($translation_languages): ?>
                                <ul>
                                    <?php foreach( $translation_languages as $keyl => $languages ) : 
                                        $codeLanguage = $keyl.'-'.$keyc;
                                        $current = (ICL_LANGUAGE_CODE == $codeLanguage)? 'active' : '';

                                        if( isset( $languagesAll[ $codeLanguage ] ) ) : ?>
                                            <li>
                                                <a href="<?php echo $languagesAll[$codeLanguage]['url']; ?>" class="<?php echo $current; ?>" data-country="<?php echo $keyc; ?>" data-lang="<?php echo $codeLanguage; ?>"><?php echo $translation_languages[$keyl]; ?></a>
                                            </li>
                                        <?php endif; ?>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </li>
                    <?php endif; ?>
                <?php endforeach;?>
            </ul>
        </div>
    <?php endif; ?>
</div>
