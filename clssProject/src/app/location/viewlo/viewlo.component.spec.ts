import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloComponent } from './viewlo.component';

describe('ViewloComponent', () => {
  let component: ViewloComponent;
  let fixture: ComponentFixture<ViewloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
