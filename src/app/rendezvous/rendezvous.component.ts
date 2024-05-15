import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../models/RendezVous.model';
import { RendezVousService } from '../rendez-vous.service';
@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {

  rendezVousList: RendezVous[] = [];
  reservation: RendezVous = {
    id: 0,
    nom: '',
    prenom: '',
    dateN: new Date(),
    date: '',
    numTel: '',
    gender: '',
    status: ''
  };

  constructor(private rendezVousService: RendezVousService) {}

  submitReservation(): void {
    this.rendezVousService.creerRendezVous(this.reservation).subscribe(
      response => {
        console.log('Reservation submitted successfully:', response);
        this.resetForm();
      },
      error => {
        console.error('Error submitting reservation:', error);
      }
    );
  }

  resetForm(): void {
    this.reservation = {
      id: 0,
      nom: '',
      prenom: '',
      dateN: new Date(),
      date: '',
      numTel: '',
      gender: '',
      status: ''
    };
  }

 

  ngOnInit(): void {
    this.obtenirRendezVous();
  }

  obtenirRendezVous(): void {
    this.rendezVousService.obtenirTousRendezVous()
      .subscribe(rendezVous => this.rendezVousList = rendezVous);
  }

  accepterRendezVous(id: number): void {
    this.rendezVousService.accepterRendezVous(id)
      .subscribe(() => this.obtenirRendezVous());
  }

  refuserRendezVous(id: number): void {
    this.rendezVousService.refuserRendezVous(id)
      .subscribe(() => this.obtenirRendezVous());
  }

  mettreAJourRendezVous(id: number, rendezVous: RendezVous): void {
    this.rendezVousService.mettreAJourRendezVous(id, rendezVous)
      .subscribe(() => this.obtenirRendezVous());
  }

  supprimerRendezVous(id: number): void {
    this.rendezVousService.supprimerRendezVous(id)
      .subscribe(() => this.obtenirRendezVous());
  }
  isModalOpen: boolean = false;



  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
} 

 
