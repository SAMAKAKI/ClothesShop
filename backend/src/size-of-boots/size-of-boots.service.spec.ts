import { Test, TestingModule } from '@nestjs/testing';
import { SizeOfBootsService } from './size-of-boots.service';

describe('SizeOfBootsService', () => {
  let service: SizeOfBootsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SizeOfBootsService],
    }).compile();

    service = module.get<SizeOfBootsService>(SizeOfBootsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
