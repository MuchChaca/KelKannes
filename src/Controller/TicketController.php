<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Ticket;
use App\Form\TicketType;
use App\Repository\TicketRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 */
class TicketController extends Controller
{
	/**
	 * Accessible only for ``ADMIN`` and allow the acess to all tickets
	 *
	 * @param TicketRepository $ticketRepository
	 * @return Response
	 * 
	 * @Route("/admin/ticket/", name="ticket_index", methods="GET")
	 */
	public function index(TicketRepository $ticketRepository): Response
	{
		return $this->render('ticket/index.html.twig', ['tickets' => $ticketRepository->findAll()]);
	}

	/**
	 * Controller to create a new ticket
	 *
	 * @param Request $request
	 * @return Response
	 * 
	 *  @Route("/admin/ticket/new", name="ticket_new", methods="GET|POST")
	 */
	public function new(Request $request): Response
	{
		
		$em = $this->getDoctrine()->getManager();
		// $em = $this->getEntityManager();
		$repoU = $em->getRepository(User::class);
		$users = $repoU->findAll();

		// $userChoices = array();
		// foreach($users as $u){
		//     // TODO
		// }

		// $choices = ['choices' => $users];
		
		$choice_labels = function($user, $key, $value) {
			/** @var User $user */
			return strtoupper($user->getEmail());
		};

		$choices_pref = function($user, $key, $value) {
			return $user->getId() == $this->getUser()->getId();
		};

		$choices = ['choices' => [ 
			'choices' => $users, 
			'choice_label' => $choice_labels, 
			'preferred_choices' => $choices_pref 
		]];
		
		// dump($choices); // DEBUG
		$ticket = new Ticket();
		$form = $this->createForm(TicketType::class, $ticket, $choices);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$em = $this->getDoctrine()->getManager();
			$em->persist($ticket);
			$em->flush();

			return $this->redirectToRoute('ticket_index');
		}

		return $this->render('ticket/new.html.twig', [
			'ticket' => $ticket,
			'form' => $form->createView(),
		]);
	}

	/**
	 * Controller to retrieve a single ticket
	 *
	 * @param Ticket $ticket
	 * @return Response
	 * 
	 * @Route("/ticket/{id}", name="ticket_show", methods="GET")
	 */
	public function show(Ticket $ticket): Response
	{
		return $this->render('ticket/show.html.twig', ['ticket' => $ticket]);
	}

	/**
	 * Controller to edit a ticket
	 *
	 * @param Request $request
	 * @param Ticket $ticket
	 * @return Response
	 * 
	 * @Route("/admin/ticket/{id}/edit", name="ticket_edit", methods="GET|POST")
	 */
	public function edit(Request $request, Ticket $ticket): Response
	{
		$form = $this->createForm(TicketType::class, $ticket);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$this->getDoctrine()->getManager()->flush();

			return $this->redirectToRoute('ticket_edit', ['id' => $ticket->getId()]);
		}

		return $this->render('ticket/edit.html.twig', [
			'ticket' => $ticket,
			'form' => $form->createView(),
		]);
	}

	/**
	 * Controller to delete a ticket
	 *
	 * @param Request $request
	 * @param Ticket $ticket
	 * @return Response
	 * 
	 * @Route("/admin/ticket/{id}", name="ticket_delete", methods="DELETE")
	 */
	public function delete(Request $request, Ticket $ticket): Response
	{
		if ($this->isCsrfTokenValid('delete'.$ticket->getId(), $request->request->get('_token'))) {
			$em = $this->getDoctrine()->getManager();
			$em->remove($ticket);
			$em->flush();
		}

		return $this->redirectToRoute('ticket_index');
	}
}
