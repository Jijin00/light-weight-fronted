import { TestBed } from '@angular/core/testing';

import { ApiserviService } from './apiservi.service';

describe('ApiserviService', () => {
  let service: ApiserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
