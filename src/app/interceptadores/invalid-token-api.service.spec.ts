import { TestBed } from '@angular/core/testing';

import { InvalidTokenApiService } from './invalid-token-api.service';

describe('InvalidTokenApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvalidTokenApiService = TestBed.get(InvalidTokenApiService);
    expect(service).toBeTruthy();
  });
});
