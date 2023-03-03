import { TestBed } from '@angular/core/testing';

import { AccessserveService } from './accessserve.service';

describe('AccessserveService', () => {
  let service: AccessserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
