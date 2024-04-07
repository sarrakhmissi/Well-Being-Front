import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Message d'erreur

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.http.post<any>('http://localhost:8080/api/login', user).subscribe(response => {
      // Handle successful login response here
      console.log(response);
      // Naviguer vers la page de tableau de bord après la connexion réussie
      this.router.navigate(['/profil']);
    }, error => {
      // Handle login error here
      console.error(error);
      this.errorMessage = 'Votre email ou mot de passe est incorrect.';
    });
  }
}
