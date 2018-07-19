<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * A ticket has a ``coupeur``, a ``chargeur`` and a ``chauffeur``
 * 
 * @uses App\Entity\User
 * 
 * @ORM\Entity(repositoryClass="App\Repository\TicketRepository")
 */
class Ticket
{
	/**
	 * @ORM\Id()
	 * @ORM\GeneratedValue()
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="string", length=255)
	 */
	private $numero;

	/**
	 * @ORM\Column(type="datetime")
	 */
	private $date_depot;

	/**
	 * @ORM\Column(type="decimal", precision=20, scale=2)
	 */
	private $weight;

	/**
	 * @ORM\Column(type="string", length=255)
	 */
	private $unit;

	/**
	 * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="ticketsAsCoupeur")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $coupeur;

	/**
	 * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="ticketsAsChargeur")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $chargeur;

	/**
	 * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="ticketsAsChauffeur")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $chauffeur;

	public function getId()
	{
		return $this->id;
	}

	public function getNumero(): ?string
	{
		return $this->numero;
	}

	public function setNumero(string $numero): self
	{
		$this->numero = $numero;

		return $this;
	}

	public function getDateDepot(): ?\DateTimeInterface
	{
		return $this->date_depot;
	}

	public function setDateDepot(\DateTimeInterface $date_depot): self
	{
		$this->date_depot = $date_depot;

		return $this;
	}

	public function getWeight()
	{
		return $this->weight;
	}

	public function setWeight($weight): self
	{
		$this->weight = $weight;

		return $this;
	}

	public function getUnit(): ?string
	{
		return $this->unit;
	}

	public function setUnit(string $unit): self
	{
		$this->unit = $unit;

		return $this;
	}

	public function getCoupeur(): ?User
	{
		return $this->coupeur;
	}

	public function setCoupeur(?User $coupeur): self
	{
		$this->coupeur = $coupeur;

		return $this;
	}

	public function getChargeur(): ?User
	{
		return $this->chargeur;
	}

	public function setChargeur(?User $chargeur): self
	{
		$this->chargeur = $chargeur;

		return $this;
	}

	public function getChauffeur(): ?User
	{
		return $this->chauffeur;
	}

	public function setChauffeur(?User $chauffeur): self
	{
		$this->chauffeur = $chauffeur;

		return $this;
	}

	//=====================================================
	
	public function __toString() {
		return $this->getNumero();
	}
}
