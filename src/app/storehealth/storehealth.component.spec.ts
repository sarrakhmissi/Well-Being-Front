import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehealthComponent } from './storehealth.component';

describe('StorehealthComponent', () => {
  let component: StorehealthComponent;
  let fixture: ComponentFixture<StorehealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorehealthComponent]
    });
    fixture = TestBed.createComponent(StorehealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
