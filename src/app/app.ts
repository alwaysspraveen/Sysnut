import {
  Component,
  HostListener,
  AfterViewInit,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Services } from './services/services';
import { BuisnessNeed } from './buisness-need/buisness-need';
import { Carousel } from "./carousel/carousel";
import { HeroBanner } from "./hero-banner/hero-banner";

declare var $: any; // Let Angular know jQuery is used

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Services, BuisnessNeed, Carousel, HeroBanner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Sysnut';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    const image = document.querySelector('.round-text .texts') as HTMLElement;
    if (image) {
      image.style.transform = `rotate(${scrollY * 0.2}deg)`;
    }
  }

  @ViewChildren('word') words!: QueryList<ElementRef>;

  currentIndex = 0;

  startRotation() {
    if (!this.words || this.words.length === 0) return;

    // Show first word initially
    this.showWord(this.currentIndex);

    // Loop rotation every 2.5 seconds
    setInterval(() => {
      this.hideWord(this.currentIndex);
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      this.showWord(this.currentIndex);
    }, 2500);
  }

  showWord(index: number) {
    this.words.forEach((word, i) => {
      const el = word.nativeElement as HTMLElement;
      if (i === index) {
        el.classList.add('is-visible');
        el.classList.remove('is-hidden');
      } else {
        el.classList.remove('is-visible');
        el.classList.add('is-hidden');
      }
    });
  }

  hideWord(index: number) {
    const el = this.words.toArray()[index].nativeElement as HTMLElement;
    el.classList.remove('is-visible');
    el.classList.add('is-hidden');
  }
}
