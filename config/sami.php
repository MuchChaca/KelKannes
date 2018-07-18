<?php

use Symfony\Component\Finder\Finder;
use Sami\Sami;
use Sami\RemoteRepository\GitHubRemoteRepository;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Resources')
    ->exclude('Tests')
    ->exclude('vendor')
    ->in('src')
;

return new Sami($iterator, array(
	'title'                => 'KelKannes Documentation',
	'build_dir'            => 'doc/build',
	'cache_dir'            => 'cache',
	'remote_repository'    => new GitHubRemoteRepository('MuchChaca/KelKannes', '/'),
	'default_opened_level' => 2,
));