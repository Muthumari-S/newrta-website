import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { AnimatedCounterDirective } from '../../shared/directives/animated-counter.directive';
import { COMPANY_ABOUT, CORE_VALUES, QUALITY_POLICY, STATS } from '../../core/data/site-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective, AnimatedCounterDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about = COMPANY_ABOUT;
  stats = STATS;
  coreValues = CORE_VALUES;
  qualityPolicy = QUALITY_POLICY;
}
