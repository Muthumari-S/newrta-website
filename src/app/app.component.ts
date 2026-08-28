import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { VerticalsComponent } from './components/verticals/verticals.component';
import { ProductsComponent } from './components/products/products.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    VerticalsComponent,
    ProductsComponent,
    WhyUsComponent,
    CaseStudiesComponent,
    CustomersComponent,
    CareersComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'newrta-website';
}
