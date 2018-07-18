<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @Table(name="users")
 */
class User implements UserInterface, \Serializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $password;

    private $plainPassword;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isActive;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $roles;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ticket", mappedBy="coupeur")
     */
    private $ticketsAsCoupeur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ticket", mappedBy="chargeur")
     */
    private $ticketsAsChargeur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ticket", mappedBy="chauffeur")
     */
    private $ticketsAsChauffeur;

    public function __construct() {
        $this->isActive = true;
        $this->ticketsAsCoupeur = new ArrayCollection();
        $this->ticketsAsChargeur = new ArrayCollection();
        $this->ticketsAsChauffeur = new ArrayCollection();
        // may not be needed, see section on salt below
        // $this->salt = md5(uniqid('', true));
    }

    public function getUsername() {
        return $this->email;
    }

    public function getSalt() {
        // you *may* need a real salt depending on your encoder
        // see section on salt below
        return null;
    }

    public function getPassword() {
        return $this->password;
    }

    function setPassword($password) {
        $this->password = $password;
    }

    public function getRoles() {
        if (empty($this->roles)) {
            return ['ROLE_USER'];
        }
        return $this->roles;
    }

    function addRole($role) {
        $this->roles[] = $role;
    }

    public function eraseCredentials() {
        
    }

    /** @see \Serializable::serialize() */
    public function serialize() {
        return serialize(array(
            $this->id,
            $this->email,
            $this->password,
            $this->isActive,
                // see section on salt below
                // $this->salt,
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized) {
        list (
                $this->id,
                $this->email,
                $this->password,
                $this->isActive,
                // see section on salt below
                // $this->salt
                ) = unserialize($serialized);
    }

    function getId() {
        return $this->id;
    }

    function getEmail() {
        return $this->email;
    }

    function getPlainPassword() {
        return $this->plainPassword;
    }

    function getIsActive() {
        return $this->isActive;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setEmail($email) {
        $this->email = $email;
    }

    function setPlainPassword($plainPassword) {
        $this->plainPassword = $plainPassword;
    }

    function setIsActive($isActive) {
        $this->isActive = $isActive;
    }

    /**
     * @return Collection|Ticket[]
     */
    public function getTicketsAsCoupeur(): Collection
    {
        return $this->ticketsAsCoupeur;
    }

    public function addTicketsAsCoupeur(Ticket $ticketsAsCoupeur): self
    {
        if (!$this->ticketsAsCoupeur->contains($ticketsAsCoupeur)) {
            $this->ticketsAsCoupeur[] = $ticketsAsCoupeur;
            $ticketsAsCoupeur->setCoupeur($this);
        }

        return $this;
    }

    public function removeTicketsAsCoupeur(Ticket $ticketsAsCoupeur): self
    {
        if ($this->ticketsAsCoupeur->contains($ticketsAsCoupeur)) {
            $this->ticketsAsCoupeur->removeElement($ticketsAsCoupeur);
            // set the owning side to null (unless already changed)
            if ($ticketsAsCoupeur->getCoupeur() === $this) {
                $ticketsAsCoupeur->setCoupeur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ticket[]
     */
    public function getTicketsAsChargeur(): Collection
    {
        return $this->ticketsAsChargeur;
    }

    public function addTicketsAsChargeur(Ticket $ticketsAsChargeur): self
    {
        if (!$this->ticketsAsChargeur->contains($ticketsAsChargeur)) {
            $this->ticketsAsChargeur[] = $ticketsAsChargeur;
            $ticketsAsChargeur->setChargeur($this);
        }

        return $this;
    }

    public function removeTicketsAsChargeur(Ticket $ticketsAsChargeur): self
    {
        if ($this->ticketsAsChargeur->contains($ticketsAsChargeur)) {
            $this->ticketsAsChargeur->removeElement($ticketsAsChargeur);
            // set the owning side to null (unless already changed)
            if ($ticketsAsChargeur->getChargeur() === $this) {
                $ticketsAsChargeur->setChargeur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ticket[]
     */
    public function getTicketsAsChauffeur(): Collection
    {
        return $this->ticketsAsChauffeur;
    }

    public function addTicketsAsChauffeur(Ticket $ticketsAsChauffeur): self
    {
        if (!$this->ticketsAsChauffeur->contains($ticketsAsChauffeur)) {
            $this->ticketsAsChauffeur[] = $ticketsAsChauffeur;
            $ticketsAsChauffeur->setChauffeur($this);
        }

        return $this;
    }

    public function removeTicketsAsChauffeur(Ticket $ticketsAsChauffeur): self
    {
        if ($this->ticketsAsChauffeur->contains($ticketsAsChauffeur)) {
            $this->ticketsAsChauffeur->removeElement($ticketsAsChauffeur);
            // set the owning side to null (unless already changed)
            if ($ticketsAsChauffeur->getChauffeur() === $this) {
                $ticketsAsChauffeur->setChauffeur(null);
            }
        }

        return $this;
    }
}
