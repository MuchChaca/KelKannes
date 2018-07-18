
# 1. Synfony project 4.1.1
<!-- TOC -->

- [1. Synfony project 4.1.1](#1-synfony-project-411)
	- [1.1. Docs](#11-docs)
	- [1.2. New project](#12-new-project)
	- [1.3. Start the new project](#13-start-the-new-project)
	- [1.4. Install annotations (if needed)](#14-install-annotations-if-needed)
	- [1.5. Symfony assets  (if needed)](#15-symfony-assets--if-needed)
	- [1.6. Install ``twig`` - Template engine  (if needed)](#16-install-twig---template-engine--if-needed)
	- [1.7. Install forms  (if needed)](#17-install-forms--if-needed)
	- [1.8. Install generator  (if needed)](#18-install-generator--if-needed)
	- [1.9. Install ORM (if needed)](#19-install-orm-if-needed)
	- [1.10. Install debug bar (if needed)](#110-install-debug-bar-if-needed)
	- [1.11. Create a controller](#111-create-a-controller)
		- [1.11.1. Symfony 3](#1111-symfony-3)
		- [1.11.2. Symfony 4+](#1112-symfony-4)
	- [1.12. Create a new entity](#112-create-a-new-entity)
	- [1.13. ORM](#113-orm)
		- [1.13.1. CRUD](#1131-crud)
		- [1.13.2. Migration](#1132-migration)
			- [1.13.2.1. :confounded: Doctrine migration (avoid)](#11321-confounded-doctrine-migration-avoid)
			- [1.13.2.2. :heavy_check_mark: Heroku shortcut (better)](#11322-heavy_check_mark-heroku-shortcut-better)
		- [1.13.3. MEMO: Persisting](#1133-memo-persisting)
		- [1.13.4. Queries](#1134-queries)
	- [1.14. Login system](#114-login-system)
	- [1.15. PHPDoc generator - Sami](#115-phpdoc-generator---sami)
	- [1.16. Not obvious dependencies](#116-not-obvious-dependencies)

<!-- /TOC -->

## 1.1. Docs
* [create a sample page](https://symfony.com/doc/current/page_creation.html)


## 1.2. New project
Use the following alias:
```bash
symfony-new app_name
# Then change directory
cd $_
```

## 1.3. Start the new project
Use the following alias:
```bash
heroku local up
```

## 1.4. Install annotations (if needed)
```bash
composer require annotations
```

composer require symfony/security-bundle

## 1.5. Symfony assets  (if needed)
```bash
composer require symfony/asset
```

## 1.6. Install ``twig`` - Template engine  (if needed)
```bash
composer require twig
```

## 1.7. Install forms  (if needed)
```bash
composer require symfony/form
```

## 1.8. Install generator  (if needed)
```bash
composer require symfony/maker-bundle --dev
```

## 1.9. Install ORM (if needed)
:question:
```bash
composer require orm
```

## 1.10. Install debug bar (if needed)
```bash
composer require symfony/profiler-pack
```

## 1.11. Create a controller
### 1.11.1. Symfony 3
* ``extends Controller``
* ``@Route`` https://symfony.com/doc/current/routing.html
* ``@Method``
* public

### 1.11.2. Symfony 4+
```bash
bin/console make:controller ControllerName
```

> If not working, check for dependencies

## 1.12. Create a new entity
```bash
bin/console make:entity
```

> If not working, check for dependencies


## 1.13. ORM
[doc](https://symfony.com/doc/current/doctrine.html)

### 1.13.1. CRUD
> https://symfony.com/blog/new-and-improved-generators-for-makerbundle

```bash
$ bin/console make:crud Entity
```

### 1.13.2. Migration
#### 1.13.2.1. :confounded: Doctrine migration (avoid)
```bash
$ bin/console make:migration
$ bin/console doctrine:migrations:migrate
```

#### 1.13.2.2. :heavy_check_mark: Heroku shortcut (better)
```bash
$ heroku local build
```

### 1.13.3. MEMO: Persisting
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


### 1.13.4. Queries
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

## 1.14. Login system

Strongly inspired by: [link](https://numa-bord.com/miniblog/symfony-4-les-base-dune-gestion-des-utilisateurs-inscription-connexion-droits-dacces/)


## 1.15. PHPDoc generator - Sami
* [:link: packagist link](https://packagist.org/packages/sami/sami)


------------------------------
## 1.16. Not obvious dependencies
*So obvious that it is not*

* composer require symfony/orm-pack
* composer require symfony/maker-bundle --dev
* composer require symfony/asset
* composer require symfony/maker-bundle --dev
