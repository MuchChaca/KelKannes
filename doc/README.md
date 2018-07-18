# Symfony

## Docs
* [create a sample page](https://symfony.com/doc/current/page_creation.html)


## New project
Use the following alias:
```bash
symfony-new app_name
# Then change directory
cd $_
```

## Start the new project
Use the following alias:
```bash
symfony-start
```

## Install annotations
```bash
composer require annotations
```

composer require symfony/security-bundle

## Symfony assets
```bash
composer require symfony/asset
```

## Install ``twig`` - Template engine
```bash
composer require twig
```

## Install forms
```bash
composer require symfony/form
```

## Install generator
```bash
composer require symfony/maker-bundle --dev
```

## Install ORM 
:question:
```bash
composer require orm
```

## Install debug bar
```bash
composer require symfony/profiler-pack
```

## Create a controller
### Symfony 3
* ``extends Controller``
* ``@Route`` https://symfony.com/doc/current/routing.html
* ``@Method``
* public


## NPM stuff
```bash
npm init
npm install webpack
npm install bootstrap
npm install jquery
npm install popper.js
```
* [doc](https://symfony.com/doc/current/frontend/encore/installation.html)
* https://symfony.com/doc/current/frontend/encore/bootstrap.html


## ORM
[doc](https://symfony.com/doc/current/doctrine.html)

### CRUD
> https://symfony.com/blog/new-and-improved-generators-for-makerbundle ?
```bash
bin/console make:crud Entity
```

### Migration
```bash
symfony-new-m
php bin/console doctrine:migrations:migrate
```

### Persisting
```php
<?php
$em = $this->getDoctrine()->getManager();

$obj = new Obj();
$obj->setAttribute($attr);

$em->persist($obj);
$em->flush(); // commit
?>
```

```bash
bin/console doctrine:generate form <Entity>
```


### Queries
```php
<?php
$query = $em->createQuery('SELECT l from AppBundle:Livre l');
?>
```

```php
<?php
$repository = $em->getRepository(<ENTITY>::class)
$all = $repository->findAll();
?>
```

## Login system

Inspired by: [link](https://numa-bord.com/miniblog/symfony-4-les-base-dune-gestion-des-utilisateurs-inscription-connexion-droits-dacces/)


------------------------------

composer require symfony/orm-pack
composer require symfony/maker-bundle --dev
composer require symfony/asset
composer require symfony/maker-bundle --dev


symfony-new-e User // Alias