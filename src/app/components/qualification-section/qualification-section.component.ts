import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualification-section.component.html',
  styleUrl: './qualification-section.component.scss'
})
export class QualificationSectionComponent {
  experience: boolean = true;
  education: boolean = false;
  clickQualification(type: string) {
    if (type == 'ex') {
      this.experience = true;
      this.education = false;
    }
    if (type == 'ed') {
      this.education = true;
      this.experience = false;

    }
  }
}
