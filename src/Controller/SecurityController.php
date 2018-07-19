<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends Controller {

	/**
	 * Login action, called when a user (anonymous) attempts to log in
	 *
	 * @param Request $request
	 * @param AuthenticationUtils $authenticationUtils
	 * @return Response
	 * 
	 * @Route("/login", name="login")
	 */
	public function login(Request $request, AuthenticationUtils $authenticationUtils) : Response {
			// get the login error if there is one
			$error = $authenticationUtils->getLastAuthenticationError();
			// last username entered by the user
			$lastUsername = $authenticationUtils->getLastUsername();
			//
			$form = $this->get('form.factory')
					 ->createNamedBuilder(null)
					 ->add('_username', null, ['label' => 'Email'])
					 ->add('_password', \Symfony\Component\Form\Extension\Core\Type\PasswordType::class, ['label' => 'Mot de passe'])
					 ->add('ok', \Symfony\Component\Form\Extension\Core\Type\SubmitType::class, ['label' => 'Connexion', 'attr' => ['class' => 'btn-success btn-block btn-connect']])
					 ->getForm();
			return $this->render('security/login.html.twig', [
							'mainNavLogin' => true, 'title' => 'Connexion',
							//
							'form' => $form->createView(),
							'last_username' => $lastUsername,
							'error' => $error,
			]);
	 }

}