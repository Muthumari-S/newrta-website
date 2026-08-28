import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CONTACT } from '../../core/data/site-data';

// Contact form is wired to Formspree (https://formspree.io) so submissions
// land in an inbox with zero backend of our own to host or secure.
//
// SETUP (one-time, ~2 minutes):
//   1. Create a free account at https://formspree.io using muthumari2122@gmail.com
//   2. Create a new form — Formspree gives you an endpoint like
//      https://formspree.io/f/xxxxabcd
//   3. Paste that endpoint below, replacing FORM_ENDPOINT's value.
//   4. Formspree emails every submission straight to muthumari2122@gmail.com
//      automatically — no further code changes needed.
const FORM_ENDPOINT = "https://formspree.io/f/mkjwljoo";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, ScrollRevealDirective],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  contact = CONTACT;
  submitted = false;
  sending = false;
  errorMessage = "";

  form = {
    name: "",
    email: "",
    message: "",
  };

  async onSubmit(): Promise<void> {
    this.errorMessage = "";

    const { name, email, message } = this.form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      this.errorMessage =
        "Please fill in your name, email and message before sending.";
      return;
    }

    this.sending = true;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      this.submitted = true;
    } catch {
      this.errorMessage =
        "We couldn't send your message right now. Please try again in a moment, or email us directly at info@newrta.com.";
    } finally {
      this.sending = false;
    }
  }
}
