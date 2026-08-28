import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

/**
 * appAnimatedCounter — counts a number up from 0 to [countTo] once the
 * host element scrolls into view. Kept dependency-free (no chart libs)
 * since this is purely a numeric-text effect.
 *
 * Usage: <span appAnimatedCounter [countTo]="30" suffix="+"></span>
 */
@Directive({
  selector: '[appAnimatedCounter]',
  standalone: true,
})
export class AnimatedCounterDirective implements AfterViewInit, OnDestroy {
  @Input() countTo = 0;
  @Input() duration = 1600;
  @Input() suffix = '';

  private observer?: IntersectionObserver;
  private rafId?: number;
  private started = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      node.textContent = `${this.countTo}${this.suffix}`;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            this.animate(node);
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    this.observer.observe(node);
  }

  private animate(node: HTMLElement): void {
    const start = performance.now();
    const from = 0;
    const to = this.countTo;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / this.duration, 1);
      // easeOutExpo — quick start, gentle settle (premium feel, not linear ticking)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = Math.round(from + (to - from) * eased);
      node.textContent = `${value}${this.suffix}`;

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
