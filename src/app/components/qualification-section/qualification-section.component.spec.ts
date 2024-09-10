import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationSectionComponent } from './qualification-section.component';

describe('QualificationSectionComponent', () => {
  let component: QualificationSectionComponent;
  let fixture: ComponentFixture<QualificationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualificationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
