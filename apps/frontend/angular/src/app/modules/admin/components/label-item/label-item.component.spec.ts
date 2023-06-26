import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelItemComponent } from './label-item.component';

describe('LabelItemComponent', () => {
  let component: LabelItemComponent;
  let fixture: ComponentFixture<LabelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
