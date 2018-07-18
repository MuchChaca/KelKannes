<?php

namespace App\Controller;

use App\Repository\TicketRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomepageController extends Controller {

	 /**
	  * @Route("/")
	  */
	 public function index(TicketRepository $ticketRepository) : Response {
		//   return $this->render('homepage/index.html.twig', ['mainNavHome'=>true, 'title'=>'Accueil']);
		$u = $this->getUser()->getId();

		// // get tickets for this user
		// $tickets = $ticketRepository->findBy(
		// 		['chauffeur'	=> $u],
		// 		['chargeur'	=> $u],
		// 		['coupeur'	=> $u]
		// 	);
		
			$cfs = $ticketRepository->findBy(
				['chauffeur'	=> $u]
			);
			$cgs = $ticketRepository->findBy(
				['chargeur'	=> $u]
			);
			$cps = $ticketRepository->findBy(
				['coupeur'	=> $u]
			);

			$tickets = array_merge($cfs, $cgs, $cps);
		  return $this->render('ticket/index.html.twig', ['mainNavHome'=>true, 'tickets' => $tickets]);
	 }
	// TODO : /templates/homepage/index.html.twig
}
