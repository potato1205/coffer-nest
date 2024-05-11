import { Test, TestingModule } from '@nestjs/testing';
import { CofferController } from './coffer.controller';

describe('CofferController', () => {
  let controller: CofferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CofferController],
    }).compile();

    controller = module.get<CofferController>(CofferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
