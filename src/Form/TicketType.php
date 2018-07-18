<?php

namespace App\Form;

use App\Entity\Ticket;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class TicketType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		dump($options['choices']);
		$builder
			->add('numero', null, [
				'label'		=> 'Numéro',
				'required'	=> true,
			])
			->add('date_depot', null, [
				'label'		=> 'Date de dépôt',
				'required'	=> true,
			])
			->add('weight', null, [
				'label'		=> 'Poids',
				'required'	=> true,
			])
			->add('unit', null, [
				'label'		=> 'Unité',
				'required'	=> true,
			])
			->add('coupeur', ChoiceType::class, $options['choices'], [
				'label'		=> 'Sélection du coupeur',
				'required'	=> true,
			])
			->add('chargeur', ChoiceType::class, $options['choices'], [
				'label'		=> 'Sélection du chargeur',
				'required'	=> true,
			])
			->add('chauffeur', ChoiceType::class, $options['choices'], [
				'label'		=> 'Sélection du chauffeur',
				'required'	=> true,
			])
		;
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Ticket::class,
			'choices' => null,
		]);
	}
}
