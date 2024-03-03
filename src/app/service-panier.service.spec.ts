import { TestBed } from '@angular/core/testing';

import { ServicePanierService } from './service-panier.service';

describe('ServicePanierService', () => {
  let service: ServicePanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
