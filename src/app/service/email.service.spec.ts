import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';

describe('Email.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailService = TestBed.get(EmailService);
    expect(service).toBeTruthy();
  });
});
