import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import {
  NAV_LINKS,
  CONTACT,
  SERVICES,
  SOCIAL_LINKS,
} from '../../core/data/site-data';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navLinks = NAV_LINKS;
  services = SERVICES;
  contact = CONTACT;
  socialLinks = SOCIAL_LINKS;
  year = new Date().getFullYear();
}
