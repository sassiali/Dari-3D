import { TestBed } from '@angular/core/testing';

import { IngenieurDetailService } from './ingenieur-detail.service';


describe('IngenieurDetailService', () => {
  let service: IngenieurDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngenieurDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
