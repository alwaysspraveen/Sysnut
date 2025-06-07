import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports:[CommonModule],
  template: `
    <div class="carousel-container">
      <div class="carousel-wrapper" 
           [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">
        <div class="carousel-slide" *ngFor="let image of images; let i = index">
          <img [src]="image.url" [alt]="image.alt" class="carousel-image">
          <div class="carousel-caption">
            <h3>{{ image.title }}</h3>
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Navigation buttons -->
      <button class="carousel-btn prev-btn" (click)="prevSlide()" aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      
      <button class="carousel-btn next-btn" (click)="nextSlide()" aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>
      
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button 
          *ngFor="let image of images; let i = index" 
          class="indicator"
          [class.active]="i === currentIndex"
          (click)="goToSlide(i)">
        </button>
      </div>
    </div>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      background: #f8f9fa;
    }

    .carousel-wrapper {
      display: flex;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      height: 400px;
    }

    .carousel-slide {
      flex: 0 0 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .carousel-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
      padding: 40px 20px 20px;
      text-align: center;
    }

    .carousel-caption h3 {
      margin: 0 0 8px 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .carousel-caption p {
      margin: 0;
      opacity: 0.9;
      font-size: 0.95rem;
    }

    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
      backdrop-filter: blur(10px);
    }

    .carousel-btn:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-50%) scale(1.1);
    }

    .carousel-btn:active {
      transform: translateY(-50%) scale(0.95);
    }

    .prev-btn {
      left: 16px;
    }

    .next-btn {
      right: 16px;
    }

    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 10;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .indicator.active {
      background: white;
      border-color: white;
    }

    .indicator:hover {
      border-color: white;
      background: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 768px) {
      .carousel-wrapper {
        height: 300px;
      }
      
      .carousel-btn {
        width: 40px;
        height: 40px;
      }
      
      .prev-btn {
        left: 12px;
      }
      
      .next-btn {
        right: 12px;
      }
      
      .carousel-caption h3 {
        font-size: 1.25rem;
      }
      
      .carousel-caption p {
        font-size: 0.875rem;
      }
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  autoSlideInterval: any;

  images = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Mountain landscape',
      title: 'Majestic Mountains',
      description: 'Breathtaking views of snow-capped peaks'
    },
    {
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop',
      alt: 'Forest lake',
      title: 'Serene Lake',
      description: 'Crystal clear waters surrounded by lush forest'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
      alt: 'Ocean sunset',
      title: 'Ocean Sunset',
      description: 'Golden hour magic over endless waters'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}