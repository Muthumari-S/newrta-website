import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { IconComponent } from "../../shared/components/icon/icon.component";
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";
import { VERTICALS } from "../../core/data/site-data";

@Component({
  selector: "app-verticals",
  standalone: true,
  imports: [CommonModule, IconComponent, ScrollRevealDirective],
  templateUrl: "./verticals.component.html",
  styleUrl: "./verticals.component.scss",
})
export class VerticalsComponent {
  verticals = VERTICALS;

  @ViewChild("track") track?: ElementRef<HTMLElement>;

  scroll(direction: "left" | "right"): void {
    const el = this.track?.nativeElement;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".vertical-card");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }
}
