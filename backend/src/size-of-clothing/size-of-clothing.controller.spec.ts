import { Test, TestingModule } from '@nestjs/testing';
import { SizeOfClothingController } from './size-of-clothing.controller';
import { SizeOfClothingService } from './size-of-clothing.service';

describe('SizeOfClothingController', () => {
  let controller: SizeOfClothingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizeOfClothingController],
      providers: [SizeOfClothingService],
    }).compile();

    controller = module.get<SizeOfClothingController>(SizeOfClothingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
