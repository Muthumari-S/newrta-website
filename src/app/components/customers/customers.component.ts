import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CUSTOMERS, PARTNERS } from '../../core/data/site-data';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  customers = CUSTOMERS;
  partners = PARTNERS;
}
