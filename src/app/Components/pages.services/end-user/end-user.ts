import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-end-user',
  imports: [Footer, Header],
  templateUrl: './end-user.html',
  styleUrl: './end-user.css'
})
export class EndUser {

}
  