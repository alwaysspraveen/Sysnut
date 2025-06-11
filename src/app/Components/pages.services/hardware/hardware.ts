import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-hardware',
  imports: [Footer, Header],
  templateUrl: './hardware.html',
  styleUrl: './hardware.css'
})
export class Hardware {

}
