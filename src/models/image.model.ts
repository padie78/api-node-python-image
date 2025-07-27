export interface IImageProcessorService {
  crop(filePath: string): Promise<Buffer>;
}