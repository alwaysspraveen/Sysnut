import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  @ViewChild('carouselTrack', { static: false }) track!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  brands = [
    { name: 'Microsoft', logo: 'assets/images/tech-icons/microsoft.png' },
    { name: 'Kaspersky', logo: 'assets/images/tech-icons/kas.png' },
    { name: 'Intel', logo: 'assets/images/tech-icons/intel.png' },
    { name: 'AMD', logo: 'assets/images/tech-icons/amd.png' },
    { name: 'HP', logo: 'assets/images/tech-icons/hp.png' },
    { name: 'Dell', logo: 'assets/images/tech-icons/dell.png' },
    { name: 'Lenovo', logo: 'assets/images/tech-icons/lenovo.png' },
    { name: 'Epson', logo: 'assets/images/tech-icons/epson.png' },
    { name: 'Canon', logo: 'assets/images/tech-icons/canon.png' },
    { name: 'Cisco', logo: 'assets/images/tech-icons/cisco.png' },
    { name: 'Hikvision', logo: 'assets/images/tech-icons/Hikvision.png' },
    { name: 'Sophos', logo: 'assets/images/tech-icons/sophos.png' },
    { name: 'Fortinet', logo: 'assets/images/tech-icons/Fortinet.png' },
    { name: 'TP-LINK', logo: 'assets/images/tech-icons/tp.png' },
    { name: 'D-Link', logo: 'assets/images/tech-icons/dlink.png' },
    { name: 'Seagate', logo: 'assets/images/tech-icons/seagate.png' },
    { name: 'Gigabyte', logo: 'assets/images/tech-icons/gigabyte.png' },
    { name: 'Sophos', logo: 'assets/images/tech-icons/sophos.png' },
  ];

  get duplicatedBrands() {
    return [...this.brands, ...this.brands]; // For infinite effect
  }
}
