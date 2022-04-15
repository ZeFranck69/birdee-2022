<?php

$translation_country    = getTranslateCountry();
$translation_languages  = getTranslateLanguages();
$currentLangueInfos     = get_language_country_info();
$languagesAll           = icl_get_languages('skip_missing=0');

?>

<div class="nav-selectors-new">
    <?php  ?>
        <span class="title"><?php echo __('Language / Pays : ', 'birdee' ); ?></span>
    <?php ?>

    
    <?php if ($translation_country ) :?>
        <div class="container-lang">
            <ul class="country-list">
            <?php if( $currentLangueInfos ): ?>
                <li class="active">
                    <span class="langTitle">
                        <span class="flag">
                            <img src="<?php echo get_template_directory_uri() . $currentLangueInfos['flag']; ?>" class="dd-selected-image">
                        </span>
                        <?php echo $currentLangueInfos['country']; ?> - <?php echo $currentLangueInfos['lang']; ?>
                    </span>
                </li>
            <?php endif; ?>

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