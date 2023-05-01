import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabelComponent } from './create-label.component';

describe('CreateLabelComponent', () => {
  let component: CreateLabelComponent;
  let fixture: ComponentFixture<CreateLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
