import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessMapComponent } from './happiness-map.component';

describe('HappinessMapComponent', () => {
  let component: HappinessMapComponent;
  let fixture: ComponentFixture<HappinessMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappinessMapComponent]
    });
    fixture = TestBed.createComponent(HappinessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
