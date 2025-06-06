import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buisness-need',
  imports: [CommonModule],
  templateUrl: './buisness-need.html',
  styleUrl: './buisness-need.css',
})
export class BuisnessNeed {
  hoveredCardIndex: number | null = null;

  cards = [
    {
      icon: 'assets/images/icons/laptop.png',
      title: 'Flexible laptops rental service',
      description:
        'For your business needs for short- or long-term projects, Sysnut',
      boxClass: 'back-box-yellow',
    },
    {
      icon: 'assets/images/icons/amc.png',
      title: 'Honesty and superior service',
      description:
        'Annual Maintenance Contract: We offer comprehensive IT Hardware',
      boxClass: 'back-box-red',
    },
    {
      icon: 'assets/images/icons/lan.png',
      title: 'Highly skilled and professionals',
      description:
        'Our professional IT Networking solution is available for routing,',
      boxClass: 'back-box-cyan',
    },
    {
      icon: 'assets/images/icons/manpower.png',
      title: 'All IT needs at one roof',
      description:
        'The market is filled with different IT services. But while each of',
      boxClass: 'back-box-green',
    },
  ];

  onMouseEnter(index: number) {
    this.hoveredCardIndex = index;
  }

  onMouseLeave() {
    this.hoveredCardIndex = null;
  }
}

