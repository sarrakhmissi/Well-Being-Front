import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorebeautyComponent } from './storebeauty.component';

describe('StorebeautyComponent', () => {
  let component: StorebeautyComponent;
  let fixture: ComponentFixture<StorebeautyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorebeautyComponent]
    });
    fixture = TestBed.createComponent(StorebeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
