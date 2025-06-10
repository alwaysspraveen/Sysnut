import { Component } from '@angular/core';
import { Header } from '../../app/Components/header/header';
import { Footer } from '../../app/Components/footer/footer';

@Component({
  selector: 'app-about-us',
  imports: [Footer, Header],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
