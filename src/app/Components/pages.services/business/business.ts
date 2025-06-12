import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-business',
  imports: [Footer, Header],
  templateUrl: './business.html',
  styleUrl: './business.css'
})
export class Business {

}
