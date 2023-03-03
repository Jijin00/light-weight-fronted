import { TestBed } from '@angular/core/testing';

import { MenserveService } from './menserve.service';

describe('MenserveService', () => {
  let service: MenserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
