import { HttpClient } from '@angular/common/http';
import { Email } from './../model/email.model';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  ngOnInit() {
  }

  mail: Email = new Email();
  emails: Email;

  constructor(private http: HttpClient, private emailService: EmailService) { 

  }

  sendEmail() {
    this.emailService.sendEmail(this.mail)
      .subscribe(data => {
        console.log(data)
      });
  }

  onSubmit() {
    this.sendEmail();
  }

 

}
