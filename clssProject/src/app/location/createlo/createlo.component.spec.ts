import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateloComponent } from './createlo.component';

describe('CreateloComponent', () => {
  let component: CreateloComponent;
  let fixture: ComponentFixture<CreateloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
