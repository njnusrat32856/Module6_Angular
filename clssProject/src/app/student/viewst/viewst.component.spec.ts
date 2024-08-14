import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstComponent } from './viewst.component';

describe('ViewstComponent', () => {
  let component: ViewstComponent;
  let fixture: ComponentFixture<ViewstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
