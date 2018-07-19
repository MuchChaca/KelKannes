<?php
namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * Checks if the app is still up 
 */
class ApplicationAvailabilityFunctionalTest extends WebTestCase
{
	/**
	  * @dataProvider urlProvider
	 */
	public function testPageIsSuccessful($url)
	{
		$client = self::createClient();
		$client->request('GET', $url);

		$tst = $client->getResponse()->isSuccessful() || $client->getResponse()->isRedirect();
		$this->assertTrue($tst);
	}

	public function urlProvider()
	{
		yield ['/'];
		yield ['/login'];
		yield ['/register'];
		yield ['/admin'];
		yield ['/admin/ticket'];
		yield ['/admin/user'];
		// ...
	}

}