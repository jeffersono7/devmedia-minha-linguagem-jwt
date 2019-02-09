import { TestBed } from '@angular/core/testing';

import { TokenApiService } from './token-api.service';

describe('TokenApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenApiService = TestBed.get(TokenApiService);
    expect(service).toBeTruthy();
  });
});
