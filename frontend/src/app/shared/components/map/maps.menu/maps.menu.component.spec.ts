import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMenuComponent } from './maps.menu.component';

describe('MapsMenuComponent', () => {
  let component: MapsMenuComponent;
  let fixture: ComponentFixture<MapsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
