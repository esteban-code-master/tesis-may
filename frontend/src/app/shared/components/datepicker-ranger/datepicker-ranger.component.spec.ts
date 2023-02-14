import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerRangerComponent } from './datepicker-ranger.component';

describe('DatepickerRangerComponent', () => {
  let component: DatepickerRangerComponent;
  let fixture: ComponentFixture<DatepickerRangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerRangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerRangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
