import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RendezVous } from './models/RendezVous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  readonly API_URL = "http://localhost:8080/api/rendezvous"; 
   readonly ENDPOINT_RENDEZVOUS = "/rendezvous"; 


  constructor(private http: HttpClient) { }

 

  creerRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
    return this.http.post<RendezVous>(`${this.API_URL}/add`, rendezVous);
  }

  accepterRendezVous(id: number): Observable<RendezVous> {
    return this.http.post<RendezVous>(`${this.API_URL}/accept/${id}`, null);
  }

  refuserRendezVous(id: number): Observable<RendezVous> {
    return this.http.post<RendezVous>(`${this.API_URL}/refuse/${id}`, null);
  }

  obtenirTousRendezVous(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(this.API_URL);
  }

  mettreAJourRendezVous(id: number, rendezVous: RendezVous): Observable<RendezVous> {
    return this.http.put<RendezVous>(`${this.API_URL}/${id}`, rendezVous);
  }

  supprimerRendezVous(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  } 
}
