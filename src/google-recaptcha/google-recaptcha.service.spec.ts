import { Test, TestingModule } from '@nestjs/testing';
import { GoogleRecaptchaService } from './google-recaptcha.service';

describe('GoogleRecaptchaService', () => {
  let service: GoogleRecaptchaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleRecaptchaService],
    }).compile();

    service = module.get<GoogleRecaptchaService>(GoogleRecaptchaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
