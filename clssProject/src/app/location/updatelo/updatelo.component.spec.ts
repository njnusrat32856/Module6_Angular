import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloComponent } from './updatelo.component';

describe('UpdateloComponent', () => {
  let component: UpdateloComponent;
  let fixture: ComponentFixture<UpdateloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
