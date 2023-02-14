import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsZoomComponent } from './maps-zoom.component';

describe('MapsZoomComponent', () => {
  let component: MapsZoomComponent;
  let fixture: ComponentFixture<MapsZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsZoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
