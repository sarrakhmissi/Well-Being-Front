import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BresultatComponent } from './bresultat.component';

describe('BresultatComponent', () => {
  let component: BresultatComponent;
  let fixture: ComponentFixture<BresultatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BresultatComponent]
    });
    fixture = TestBed.createComponent(BresultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
