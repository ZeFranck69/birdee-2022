<?php

include __DIR__ . '/geotargetly.php';

/*
Langues - Country
*/
function getTranslateCountry(){
    $translation_country = array(
        'eu' => array('titre' => __('Europe', 'Birdee'), 'flag' => '/src/images/flags/eu.svg' ),
        'fr' => array('titre' => __('France', 'Birdee') , 'flag' => '/src/images/flags/fr.svg' ),
        'be' => array('titre' => __('Belgium', 'Birdee'), 'flag' => '/src/images/flags/be.svg' ),
        'lu' => array('titre' => __('Luxembourg', 'Birdee'), 'flag' => '/src/images/flags/lu.svg' ),
    );
    return $translation_country;
}
function getTranslateLanguages(){
    $translation_languages = array(
        'fr'=> __('French', 'Birdee'),
        'nl' => __('Dutch', 'Birdee'),
        'en' => __('English', 'Birdee'),
    );
    return  $translation_languages;
}


function getCurrentLanguageInfos(){
    $translation_country    = getTranslateCountry();
    $translation_languages  = getTranslateLanguages();
    $currentLang            = (function_exists('icl_object_id')) ? ICL_LANGUAGE_CODE : 'en-eu';
    $currentLangueInfos     = array();
    preg_match('#(.+)-(.+)#',$currentLang,$langCountryTab);

    if(isset($langCountryTab[1])){
        if(array_key_exists($langCountryTab[1],$translation_languages)){
            $currentLangueInfos['lang'] = $translation_languages[$langCountryTab[1]];
            $currentLangueInfos['langcode'] = $langCountryTab[1];
        }
    }
    if(isset($langCountryTab[2])){
        if(array_key_exists($langCountryTab[2],$translation_country)){

            $currentLangueInfos['country'] = $translation_country[$langCountryTab[2]]['titre'];
            $currentLangueInfos['countrycode'] = $langCountryTab[2];
            $currentLangueInfos['flag'] = $translation_country[$langCountryTab[2]]['flag'];
        }
    }
    return $currentLangueInfos;
}

function get_language_country_info() {
    if(!empty($_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ]]) && !empty($_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ]])){
        return array(
        'country' => $_COOKIE[ BIRDEE_COOKIES[ 'LANGUAGE' ] ],
        'countryCode' => $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ],
        'flag' => getTranslationCountry()[ $_COOKIE[ BIRDEE_COOKIES[ 'COUNTRY' ] ] ]
        );
    }else{
        return null;
    }
}

add_action('wp_languages_switcher',  'languages_switcher');

function languages_switcher(){
    include __DIR__ . '/template/language-switcher.php';

}
