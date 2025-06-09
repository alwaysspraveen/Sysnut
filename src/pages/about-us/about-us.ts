import { Component } from '@angular/core';
import { Footer } from '../../app/footer/footer';
import { Header } from '../../app/header/header';

@Component({
  selector: 'app-about-us',
  imports: [Footer, Header],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
