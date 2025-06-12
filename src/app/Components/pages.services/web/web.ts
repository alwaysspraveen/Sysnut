import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-web',
  imports: [Footer, Header],
  templateUrl: './web.html',
  styleUrl: './web.css'
})
export class Web {

}
