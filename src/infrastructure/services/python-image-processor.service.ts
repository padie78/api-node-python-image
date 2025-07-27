import { IImageProcessorService } from '../../models/image.model';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

export class PythonImageProcessorService implements IImageProcessorService {
  async crop(filePath: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const python = spawn('python3', ['scripts/crop_image.py', filePath]);

      python.stderr.on('data', (data) => {
        console.error(`Python error: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          fs.readFile(filePath, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data); // esto es un Buffer
            }
          });
        } else {
          reject(new Error('Python script failed'));
        }
      });
    });
  }
}
