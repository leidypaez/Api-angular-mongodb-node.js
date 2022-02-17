import { TestBed } from '@angular/core/testing';

import { ApiBitcoinService } from './api-bitcoin.service';

describe('ApiBitcoinService', () => {
  let service: ApiBitcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBitcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
