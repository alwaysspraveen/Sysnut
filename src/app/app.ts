import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var $: any; // Let Angular know jQuery is used

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
   title = 'Sysnut';
}
