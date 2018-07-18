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
            ->add('numero')
            ->add('date_depot')
            ->add('weight')
            ->add('unit')
            ->add('coupeur', ChoiceType::class, $options['choices'])
            ->add('chargeur', ChoiceType::class, $options['choices'])
            ->add('chauffeur', ChoiceType::class, $options['choices'])
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
