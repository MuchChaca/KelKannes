<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/member") */
class MemberController extends Controller {

	 /**
	  * @Route("/")
	  */
	 public function index() {
		 // TODO - array for each month from now, the number of tonnes
		 
		  return $this->render('user/index.html.twig', ['mainNavMember'=>true, 'title'=>'Espace Membre']);
	 }

}