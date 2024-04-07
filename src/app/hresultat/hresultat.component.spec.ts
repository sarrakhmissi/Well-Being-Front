import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HresultatComponent } from './hresultat.component';

describe('HresultatComponent', () => {
  let component: HresultatComponent;
  let fixture: ComponentFixture<HresultatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HresultatComponent]
    });
    fixture = TestBed.createComponent(HresultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
