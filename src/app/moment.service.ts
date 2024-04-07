import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Moment } from './models/moment.model';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseUrl = 'http://localhost:8080/api/moments';

  constructor(private http: HttpClient) { }

  // Créer un nouveau moment
  createMoment(moment: Moment): Observable<Moment> {
    return this.http.post<Moment>(`${this.baseUrl}/add`, moment, this.getHttpOptions())
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer tous les moments
  getAllMoments(): Observable<Moment[]> {
    return this.http.get<Moment[]>(`${this.baseUrl}/all`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gérer les erreurs
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur du côté client
      console.error('An error occurred:', error.error.message);
    } else {
      // Erreur du côté serveur
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Retourne une observable avec une erreur conviviale
    return throwError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
  }

  // Définir les options HTTP
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
