import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportPositionComponent } from './card-report-position.component';

describe('CardReportPositionComponent', () => {
  let component: CardReportPositionComponent;
  let fixture: ComponentFixture<CardReportPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReportPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReportPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
