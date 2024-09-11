import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works-section.component.html',
  styleUrl: './works-section.component.scss'
})
export class WorksSectionComponent {
  activeFilter: string = 'angular';
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }
}
