import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPayFormComponent } from './loan-pay-form.component';

describe('LoanPayFormComponent', () => {
  let component: LoanPayFormComponent;
  let fixture: ComponentFixture<LoanPayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanPayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanPayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
