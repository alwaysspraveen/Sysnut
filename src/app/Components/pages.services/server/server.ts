import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-server',
  imports: [Footer, Header],
  templateUrl: './server.html',
  styleUrl: './server.css'
})
export class Server {

}
