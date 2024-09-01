import { TestBed } from '@angular/core/testing';

import { DrupalApiService } from './drupal-api.service';

describe('DrupalApiService', () => {
  let service: DrupalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrupalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
