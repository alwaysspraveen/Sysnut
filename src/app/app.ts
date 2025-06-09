import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WhoWeAre } from "./who-we-are/who-we-are";

declare var $: any; // Let Angular know jQuery is used

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Sysnut';
}
