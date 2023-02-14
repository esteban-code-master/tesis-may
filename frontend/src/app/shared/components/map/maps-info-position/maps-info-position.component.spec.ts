import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsInfoPositionComponent } from './maps-info-position.component';

describe('MapsInfoPositionComponent', () => {
  let component: MapsInfoPositionComponent;
  let fixture: ComponentFixture<MapsInfoPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsInfoPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsInfoPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
