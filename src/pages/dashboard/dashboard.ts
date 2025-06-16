import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Footer } from '../../app/Components/footer/footer';
import { BuisnessNeed } from '../../app/Components/buisness-need/buisness-need';
import { Services } from '../../app/Components/services/services';
import { Carousel } from '../../app/Components/carousel/carousel';
import { WhoWeAre } from '../../app/Components/who-we-are/who-we-are';
import { Header } from '../../app/Components/header/header';
import { HeroBanner } from "../../app/Components/hero-banner/hero-banner";

@Component({
  selector: 'app-dashboard',
  imports: [
    Footer,
    BuisnessNeed,
    Services,
    Carousel,
    Header,
    WhoWeAre,
    Services,
    HeroBanner
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
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
