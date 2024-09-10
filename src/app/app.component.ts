import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component";
import { QualificationSectionComponent } from "./components/qualification-section/qualification-section.component";
import { WorksSectionComponent } from "./components/works-section/works-section.component";
import { TestimonialsSectionComponent } from "./components/testimonials-section/testimonials-section.component";
import { ContactSectionComponent } from "./components/contact-section/contact-section.component";
import { FooterSectionComponent } from "./components/footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSectionComponent, AboutSectionComponent, SkillsSectionComponent, QualificationSectionComponent, WorksSectionComponent, TestimonialsSectionComponent, ContactSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) { // Adjust value based on when you want the shadow to appear
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
}
