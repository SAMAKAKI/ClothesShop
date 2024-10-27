import { Test, TestingModule } from '@nestjs/testing';
import { SizeOfBootsController } from './size-of-boots.controller';
import { SizeOfBootsService } from './size-of-boots.service';

describe('SizeOfBootsController', () => {
  let controller: SizeOfBootsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizeOfBootsController],
      providers: [SizeOfBootsService],
    }).compile();

    controller = module.get<SizeOfBootsController>(SizeOfBootsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
