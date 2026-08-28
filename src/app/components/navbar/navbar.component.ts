import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { NAV_LINKS } from '../../core/data/site-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  links = NAV_LINKS;
  isScrolled = false;
  isMenuOpen = false;
  activeFragment = '';

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 24;
  }

  ngAfterViewInit(): void {
    // Scrollspy: highlight the nav link whose section is currently most in view.
    const sections = this.links
      .map((link) => document.getElementById(link.fragment))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeFragment = entry.target.id;
          }
        });
      },
      {
        // Treat a section as "current" once it's crossed roughly the upper third
        // of the viewport, so the highlight feels timed to what the user is reading.
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
