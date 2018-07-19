<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\User1Type;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/admin/user")
 */
class UserController extends Controller
{
	/**
	 * User controller to render all users - restricted to ``ADMIN``
	 *
	 * @param UserRepository $userRepository
	 * @return Response
	 * 
	 * @Route("/", name="user_index", methods="GET")
	 */
	public function index(UserRepository $userRepository): Response
	{
		return $this->render('user/index.html.twig', ['users' => $userRepository->findAll()]);
	}

	/**
	 * Controller to create a new user
	 *
	 * @param Request $request
	 * @param UserPasswordEncoderInterface $passwordEncoder
	 * @return Response
	 * 
	 * @Route("/new", name="user_new", methods="GET|POST")
	 */
	public function new(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
	{
		$user = new User();
		$form = $this->createForm(User1Type::class, $user);
		$form->handleRequest($request);

		$password = $passwordEncoder->encodePassword($user, $user->getPassword());
		$user->setPassword($password);

		if ($form->isSubmitted() && $form->isValid()) {
			$em = $this->getDoctrine()->getManager();
			$em->persist($user);
			$em->flush();

			return $this->redirectToRoute('user_index');
		}

		return $this->render('user/new.html.twig', [
			'user' => $user,
			'form' => $form->createView(),
		]);
	}

	/**
	 * Controller to render a requested user
	 *
	 * @param User $user
	 * @return Response
	 * 
	 * @Route("/{id}", name="user_show", methods="GET")
	 */
	public function show(User $user): Response
	{
		return $this->render('user/show.html.twig', ['user' => $user]);
	}

	/**
	 * Controller to allow user's edition - restricted to ``ADMIN``
	 *
	 * @param Request $request
	 * @param User $user
	 * @return Response
	 * 
	 * @Route("/{id}/edit", name="user_edit", methods="GET|POST")
	 */
	public function edit(Request $request, User $user): Response
	{
		$form = $this->createForm(User1Type::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$this->getDoctrine()->getManager()->flush();

			return $this->redirectToRoute('user_edit', ['id' => $user->getId()]);
		}

		return $this->render('user/edit.html.twig', [
			'user' => $user,
			'form' => $form->createView(),
		]);
	}

	/**
	 * Controller to delete a user - restricted to ``ADMIN``
	 *
	 * @param Request $request
	 * @param User $user
	 * @return Response
	 * 
	 * @Route("/{id}", name="user_delete", methods="DELETE")
	 */
	public function delete(Request $request, User $user): Response
	{
		if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
			$em = $this->getDoctrine()->getManager();
			$em->remove($user);
			$em->flush();
		}

		return $this->redirectToRoute('user_index');
	}
}
