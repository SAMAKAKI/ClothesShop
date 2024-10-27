import { Test, TestingModule } from '@nestjs/testing';
import { SizeOfClothingService } from './size-of-clothing.service';

describe('SizeOfClothingService', () => {
  let service: SizeOfClothingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SizeOfClothingService],
    }).compile();

    service = module.get<SizeOfClothingService>(SizeOfClothingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
