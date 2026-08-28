import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SERVICES } from '../../core/data/site-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = SERVICES;
  activeIndex = 0;

  setActive(i: number): void {
    this.activeIndex = i;
  }
}
