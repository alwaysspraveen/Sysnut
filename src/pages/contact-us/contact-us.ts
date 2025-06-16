import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { Footer } from '../../app/Components/footer/footer';
import { Header } from '../../app/Components/header/header';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.html',
  imports: [FormsModule, CommonModule, Footer, Header],
  styleUrls: ['./contact-us.css'],
})
export class ContactUs {
  form = {
    name: '',
    mobile: '',
    email: '',
    interest: '',
    message: '',
  };

  sendEmail() {
    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      from_mobile: this.form.mobile,
      interest: this.form.interest,
      message: this.form.message,
    };

    emailjs
      .send(
        'service_kuomttm',
        'template_1vj5wkw',
        templateParams,
        't8FGkDzJLsFbkPDZR'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          this.form = {
            name: '',
            mobile: '',
            email: '',
            interest: '',
            message: '',
          };
        },
        (error) => {
          console.error('❌ Email sending failed:', error);
          alert('⚠️ Failed to send message. Try again later.');
        }
      );
  }
}
