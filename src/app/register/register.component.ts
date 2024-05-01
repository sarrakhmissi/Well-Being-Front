import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  username: string = '';
  password: string = '';
  email: string = '';
  

  constructor(private http: HttpClient) {}

  register() {
    const user = { username: this.username, password: this.password , email: this.email };
    this.http.post<any>('http://localhost:8080/api/register', user).subscribe(response => {
      // Handle successful registration response here
      console.log(response);
      // Call sendEmail function after successful registration
      this.sendEmail(this.email);
    }, error => {
      // Handle registration error here
      console.error(error);
    });
  }

  sendEmail(email: string) {
    // Call your backend endpoint to send email
    this.http.post<any>('http://localhost:8080/api/mail/sendEmail', { toEmail: email }).subscribe(response => {
      // Handle successful email sending response here
      console.log(response);
    }, error => {
      // Handle email sending error here
      console.error(error);
    });
  }
  
}
