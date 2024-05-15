import { Test, TestingModule } from '@nestjs/testing';
import { CofferService } from './coffer.service';

describe('CofferService', () => {
  let service: CofferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CofferService],
    }).compile();

    service = module.get<CofferService>(CofferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
