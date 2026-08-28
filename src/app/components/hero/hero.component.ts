import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface HeroSlide {
  headline: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  // Rotating focus areas, taken verbatim from the newrta.com hero rotator.
  slides: HeroSlide[] = [
    { headline: 'Consulting' },
    { headline: 'Digital Transformation' },
    { headline: 'EdTech' },
    { headline: 'Logistics & Supply Chain' },
  ];

  activeIndex = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    }, 2500);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
