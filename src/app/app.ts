import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cloud } from "./Components/pages.services/cloud/cloud";
import { Server } from "./Components/pages.services/server/server";
import { Hardware } from "./Components/pages.services/hardware/hardware";

declare var $: any; // Let Angular know jQuery is used

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Cloud, Server, Hardware],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Sysnut';
}
