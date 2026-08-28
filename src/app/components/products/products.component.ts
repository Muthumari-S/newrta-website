import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PRODUCTS } from '../../core/data/site-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = PRODUCTS;

  @ViewChild('track') track?: ElementRef<HTMLElement>;

  scroll(direction: 'left' | 'right'): void {
    const el = this.track?.nativeElement;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.product-card');
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }
}
