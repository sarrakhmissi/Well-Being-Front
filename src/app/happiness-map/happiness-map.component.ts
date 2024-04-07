import { Component } from '@angular/core';
import { Moment } from '../models/moment.model'; // Assurez-vous d'avoir le bon chemin d'importation
import { MomentService } from '../moment.service';

@Component({
  selector: 'app-happiness-map',
  templateUrl: './happiness-map.component.html',
  styleUrls: ['./happiness-map.component.css']
})
export class HappinessMapComponent {
  moments: Moment[] = [];
  newMoment: Moment = { id: 0, description: '', dateTime: new Date() }; // Nouveau moment à ajouter

  errorMessage: string = ''; // Message d'erreur

  constructor(private momentService: MomentService) { }

  ngOnInit() {
    this.loadMoments(); // Charge les moments initiaux lors du chargement du composant
  }

  // Charge tous les moments depuis le service
  loadMoments() {
    this.momentService.getAllMoments()
      .subscribe(
        (data: Moment[]) => {
          this.moments = data;
        },
        (error) => {
          this.errorMessage = 'Une erreur s\'est produite lors du chargement des moments.';
          console.error(error);
        }
      );
  }

  // Ajoute un nouveau moment
  addMoment() {
    this.momentService.createMoment(this.newMoment)
      .subscribe(
        (data: Moment) => {
          this.moments.push(data);
          this.newMoment = { id: 0, description: '', dateTime: new Date() }; // Réinitialise le nouveau moment
        },
        (error) => {
          this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout du moment.';
          console.error(error);
        }
      );
  }

}
