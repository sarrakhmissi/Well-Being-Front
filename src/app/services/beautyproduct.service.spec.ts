import { TestBed } from '@angular/core/testing';

import { BeautyproductService } from './beautyproduct.service';

describe('BeautyproductService', () => {
  let service: BeautyproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautyproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
