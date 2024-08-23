import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferFormComponent } from './fund-transfer-form.component';

describe('FundTransferFormComponent', () => {
  let component: FundTransferFormComponent;
  let fixture: ComponentFixture<FundTransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundTransferFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
