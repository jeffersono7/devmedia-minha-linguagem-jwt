import { TestBed } from '@angular/core/testing';

import { LinguagemService } from './linguagem.service';

describe('LinguagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinguagemService = TestBed.get(LinguagemService);
    expect(service).toBeTruthy();
  });
});
