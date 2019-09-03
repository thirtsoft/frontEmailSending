import { Email } from './../model/email.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public host: string = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { 

  }

  public sendEmail(email: Email): Observable<any> {
    return this.http.post(this.host, email);

  }
}
