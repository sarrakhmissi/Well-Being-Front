import { TestBed } from '@angular/core/testing';

import { HealthproductService } from './healthproduct.service';

describe('HealthproductService', () => {
  let service: HealthproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
