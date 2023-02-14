import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitComponent } from './maps.component';

describe('BusinessUnitComponent', () => {
  let component: BusinessUnitComponent;
  let fixture: ComponentFixture<BusinessUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
