import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  username: string = '';
  password: string = '';
  email: string = '';
  firstname : string = '';
  lastname : string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  register() {
    const user = { username: this.username, password: this.password , email: this.email, firstname: this.firstname, lastname: this.lastname };
    this.loginService.register(user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    }, error => {
      console.error(error);
    });
  }

  sendEmail(email: string) {
    this.loginService.sendEmail(email).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }  
}
