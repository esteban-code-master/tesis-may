import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsContainerComponent } from './maps.container.component';

describe('MapsComponent', () => {
  let component: MapsContainerComponent;
  let fixture: ComponentFixture<MapsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
