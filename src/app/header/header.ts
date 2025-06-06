import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
 isSticky = false;

  ngOnInit() {
    this.updateScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateScroll();
  }

  updateScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }
}
