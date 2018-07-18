<?php

namespace App\Controller;

use App\Entity\Ticket;
use App\Repository\TicketRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomepageController extends Controller {

	 /**
	  * @Route("/", name="connected_homepage")
	  */
	 public function index(TicketRepository $ticketRepository) : Response {
		
		$tickets = array();

		if(in_array('ROLE_ADMIN', $this->getUser()->getRoles())){

			$tickets = $ticketRepository->findAll();

		} else {
			$u = $this->getUser()->getId();

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
		}

		// don't keep duplicates
		$tickets = array_unique($tickets);

		// Sort them from the most recent
		usort($tickets, function (Ticket $a, Ticket $b) {
			return $a->getDateDepot() < $b->getDateDepot();
		});
		
		return $this->render('ticket/index.html.twig', ['mainNavHome'=>true, 'tickets' => $tickets]);
	 }

}
