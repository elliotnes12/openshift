import { TestBed } from '@angular/core/testing';

import { OpenshiftService } from './openshift.service';

describe('OpenshiftService', () => {
  let service: OpenshiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenshiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
