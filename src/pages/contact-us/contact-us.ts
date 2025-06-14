import { Component } from '@angular/core';
import { Header } from "../../app/Components/header/header";
import { Footer } from "../../app/Components/footer/footer";

@Component({
  selector: 'app-contact-us',
  imports: [Header, Footer],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {

}
