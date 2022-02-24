# Mise en place

> :warning: **Le boilerplate utilise une branche différente pour WooCommerce**

---
## Se connecter au 178

```
ssh 178.62.51.241
cd /var/www/dev
```


----
## **Cloner le boilerplate**
### Standard
```
git clone git@bitbucket.org:el-tigre-dev/wp-eltigre-2021.git NOM_PROJET
```

### Woocommerce
```
git clone --branch woocommerce git@bitbucket.org:el-tigre-dev/wp-eltigre-2021.git NOM_PROJET
```

> Si jamais vous avez cloner la mauvaise branche, vous pouvez faire un 
```git checkout -b master``` pour la branche **standard**
```git checkout -b woocommerce``` pour la branche **WooCommerce**

----

Entrez dans ce nouveau dossier

```
cd NOM_PROJET
```


Lancer l'installation de Composer

```
composer install
```

Créer un repository puis relier le projet à ce dernier
```
git remote add origin git@bitbucket.org:el-tigre-dev/<REPOSITORY>.git
git add .
git commit -m 'init'
git push -u origin master
```

Créer une base de données pour le projet

```
mysql -uroot -p -e "create database NOM_PROJET"
```

Créer un fichier .env à la racine, en utilisant le .env.example comme modèle, et le remplir avec les informations du site. Le paramètre WP_HOME doit être l'url du site, et doit donc commencer par "http://..."

```
cp .env.example .env

nano .env
```


# Mise en place en Local

1. Cloner le repository **dans votre dossier htdocs ou www**

```
git clone git@bitbucket.org:el-tigre-dev/<REPOSITORY>.git NOM_PROJET
```

2. Se rendre à la racine du projet

````
cd NOM_PROJET
````

3. Copier le fichier .env.example, la copie en .env et le remplir


4. Installer les dépendances Composer

````
composer update
````


5. Se rendre dans le dossier du starter theme El Tigre

```
cd content/themes/eltigre
```

6. Installer les packages NPM

```
npm install
npm start
```


## Usage

Pour lancer webpack en mode dev : 

```
npm start
```

Pour build le site en version prod : 

```
npm run build
```

# Latest

- WooCommerce Boilerplate
- Modules (Contact, Support)
- ACF/Wysiwyg Color Picker
- Table prefix .env
- Swiper enqueue par défaut (CDN)
- Fix les meta description en double si Yoast est installé
- Sanitize des noms de fichier à l'upload
- WP Mail SMTP et Google Site Kit


# In Development
- Formulaire support intégré au Dashboard