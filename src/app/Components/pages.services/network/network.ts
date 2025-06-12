import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-network',
  imports: [Footer, Header],
  templateUrl: './network.html',
  styleUrl: './network.css'
})
export class Network {

}
