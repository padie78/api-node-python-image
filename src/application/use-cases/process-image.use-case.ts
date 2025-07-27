import { IImageProcessorService } from '../../models/image.model';

export class ProcessImageUseCase {
  constructor(private processor: IImageProcessorService) {}

  async execute(filePath: string): Promise<Buffer> {
    return this.processor.crop(filePath);
  }
}
