import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccccComponent } from './acccc.component';

describe('AccccComponent', () => {
  let component: AccccComponent;
  let fixture: ComponentFixture<AccccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccccComponent]
    });
    fixture = TestBed.createComponent(AccccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
