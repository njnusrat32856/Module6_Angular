import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestComponent } from './updatest.component';

describe('UpdatestComponent', () => {
  let component: UpdatestComponent;
  let fixture: ComponentFixture<UpdatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
