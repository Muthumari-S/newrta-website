import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * <app-icon name="code" /> — minimal inline-SVG icon set, stroke-based,
 * sized via CSS (width/height inherited). Kept self-contained so the
 * project has zero icon-font dependency.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="app-icon"
      aria-hidden="true"
    >
      <ng-container [ngSwitch]="name">
        <ng-container *ngSwitchCase="'code'">
          <polyline points="8 18 2 12 8 6"></polyline>
          <polyline points="16 6 22 12 16 18"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'globe'">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M3 12h18"></path>
          <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'compass'">
          <circle cx="12" cy="12" r="9"></circle>
          <polygon
            points="14.5 9.5 12.5 14.5 9.5 12.5 11.5 9.5 14.5 9.5"
          ></polygon>
        </ng-container>

        <ng-container *ngSwitchCase="'refresh'">
          <path d="M21 12a9 9 0 1 1-2.64-6.36"></path>
          <polyline points="21 3 21 9 15 9"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'ship'">
          <path d="M3 17l1.5-6h15L21 17"></path>
          <path
            d="M5 17c1 1.5 2.5 2 4 2s3-.5 4-2c1 1.5 2.5 2 4 2s3-.5 4-2"
          ></path>
          <path d="M12 11V4"></path>
          <path d="M9 6h6"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'landmark'">
          <path d="M3 21h18"></path>
          <path d="M5 21V10"></path>
          <path d="M19 21V10"></path>
          <path d="M9 21V10"></path>
          <path d="M15 21V10"></path>
          <path d="M2 10l10-6l10 6"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'heart-pulse'">
          <path
            d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6l1-1a5.5 5.5 0 0 0 0-7.8z"
          ></path>
          <polyline points="6 12 8.5 12 10 9 13 15 14.5 12 18 12"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'graduation-cap'">
          <path d="M22 10L12 5 2 10l10 5 10-5z"></path>
          <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'phone'">
          <path
            d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"
          ></path>
        </ng-container>

        <ng-container *ngSwitchCase="'mail'">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <polyline points="2 6 12 13 22 6"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'pin'">
          <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z"></path>
          <circle cx="12" cy="10" r="2.5"></circle>
        </ng-container>

        <ng-container *ngSwitchCase="'arrow-right'">
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <polyline points="14 6 20 12 14 18"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'menu'">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </ng-container>

        <ng-container *ngSwitchCase="'close'">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </ng-container>

        <ng-container *ngSwitchCase="'check'">
          <polyline points="20 6 9 17 4 12"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'star'">
          <polygon
            points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"
          ></polygon>
        </ng-container>

        <ng-container *ngSwitchCase="'building'">
          <rect x="4" y="2" width="16" height="20" rx="1"></rect>
          <line x1="8" y1="6" x2="8" y2="6.01"></line>
          <line x1="12" y1="6" x2="12" y2="6.01"></line>
          <line x1="16" y1="6" x2="16" y2="6.01"></line>
          <line x1="8" y1="10" x2="8" y2="10.01"></line>
          <line x1="12" y1="10" x2="12" y2="10.01"></line>
          <line x1="16" y1="10" x2="16" y2="10.01"></line>
          <line x1="8" y1="14" x2="8" y2="14.01"></line>
          <line x1="12" y1="14" x2="12" y2="14.01"></line>
          <line x1="16" y1="14" x2="16" y2="14.01"></line>
          <path d="M9 22v-4h6v4"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'handshake'">
          <path d="M8 12l3 3 2-2 4 4"></path>
          <path d="M2 11l5-4 4 2 3-2 5 3-4 5-2-1-3 3-4-3-2 1z"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'download'">
          <path d="M12 3v12"></path>
          <polyline points="7 11 12 16 17 11"></polyline>
          <path d="M5 21h14"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'chevron-left'">
          <polyline points="15 18 9 12 15 6"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'chevron-right'">
          <polyline points="9 18 15 12 9 6"></polyline>
        </ng-container>

        <ng-container *ngSwitchCase="'linkedin'">
          <path
            d="M21.247 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H10.151V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"
          ></path>
          <path
            d="M4.537 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H2.755V9h3.564v11.452z"
          ></path>
        </ng-container>

        <ng-container *ngSwitchCase="'x'">
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          ></path>
        </ng-container>

        <ng-container *ngSwitchCase="'facebook'">
          <path
            d="M14.5 22v-9.294h3.12l.467-3.622H14.5V6.789c0-1.049.291-1.764 1.796-1.764h1.919V1.797A25.62 25.62 0 0 0 15.44 1.7c-2.735 0-4.607 1.67-4.607 4.736v2.648H7.706v3.622h3.127V22h3.667z"
          ></path>
        </ng-container>

        <ng-container *ngSwitchCase="'youtube'">
          <path d="M9.75 15.02V8.98L15.5 12l-5.75 3.02z"></path>
        </ng-container>

        <ng-container *ngSwitchCase="'instagram'">
          <rect x="3" y="3" width="18" height="18" rx="5"></rect>
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
          ></circle>
          <circle
            cx="17.2"
            cy="6.8"
            r="1.15"
            fill="var(--icon-bg, #050c14)"
            stroke="none"
          ></circle>
        </ng-container>
      </ng-container>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
      .app-icon {
        display: block;
      }
    `,
  ],
})
export class IconComponent {
  @Input() name = 'code';
  @Input() size = 22;

  get isBrandMark(): boolean {
    return ['x', 'facebook', 'linkedin', 'instagram'].includes(this.name);
  }
}
