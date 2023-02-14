import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkingDayComponent } from './select-working-day.component';

describe('SelectWorkingDayComponent', () => {
  let component: SelectWorkingDayComponent;
  let fixture: ComponentFixture<SelectWorkingDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWorkingDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWorkingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
