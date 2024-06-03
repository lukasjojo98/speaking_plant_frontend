import { TestBed } from '@angular/core/testing';

import { ModelAnswerService } from './model-answer.service';

describe('ModelAnswerService', () => {
  let service: ModelAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
