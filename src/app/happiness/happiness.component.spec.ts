import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessComponent } from './happiness.component';

describe('HappinessComponent', () => {
  let component: HappinessComponent;
  let fixture: ComponentFixture<HappinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappinessComponent]
    });
    fixture = TestBed.createComponent(HappinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
