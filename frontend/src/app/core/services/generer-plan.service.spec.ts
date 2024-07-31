import { TestBed } from '@angular/core/testing';

import { GenererPlanService } from './generer-plan.service';

describe('GenererPlanService', () => {
  let service: GenererPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenererPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
