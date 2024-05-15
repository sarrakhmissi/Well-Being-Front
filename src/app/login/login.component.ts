import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isConnected: boolean = false;
  errorMessage: string = ''; 

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.loginService.login(user).subscribe(response => {
      console.log(response);
      this.isConnected = true;
      this.router.navigate(['/home']);
    }, error => {
      console.error(error);
      this.errorMessage = 'Votre email ou mot de passe est incorrect.';
    });
  }
}
