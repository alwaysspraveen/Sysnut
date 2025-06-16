// header.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-herobanner',
  templateUrl: './hero-banner.html',
  imports: [CommonModule],
  styleUrls: ['./hero-banner.css'],
})
export class HeroBanner {
  images = ['assets/images/hero/Hero-1.png', 'assets/images/hero/Hero-2.png', 'assets/images/hero/Hero-3.png'];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // 3 seconds
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
