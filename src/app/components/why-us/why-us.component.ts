import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { REASONS } from '../../core/data/site-data';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  reasons = REASONS;
}
