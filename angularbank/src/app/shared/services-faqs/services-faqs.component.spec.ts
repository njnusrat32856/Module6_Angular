import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFaqsComponent } from './services-faqs.component';

describe('ServicesFaqsComponent', () => {
  let component: ServicesFaqsComponent;
  let fixture: ComponentFixture<ServicesFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesFaqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
