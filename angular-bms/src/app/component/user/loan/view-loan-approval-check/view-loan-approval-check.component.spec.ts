import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanApprovalCheckComponent } from './view-loan-approval-check.component';

describe('ViewLoanApprovalCheckComponent', () => {
  let component: ViewLoanApprovalCheckComponent;
  let fixture: ComponentFixture<ViewLoanApprovalCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLoanApprovalCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoanApprovalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
