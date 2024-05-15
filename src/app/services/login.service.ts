import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post<any>('http://localhost:8080/api/login', user);
  }

  register(user: any) {
    return this.http.post<any>('http://localhost:8080/api/register', user);
  }

  sendEmail(email: string) {
    return this.http.post<any>('http://localhost:8080/api/mail/sendEmail', { toEmail: email });
  }
}
