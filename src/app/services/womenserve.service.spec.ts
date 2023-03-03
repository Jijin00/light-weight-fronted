import { TestBed } from '@angular/core/testing';

import { WomenserveService } from './womenserve.service';

describe('WomenserveService', () => {
  let service: WomenserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
