import express from 'express';
import multer from 'multer';
import { storage } from '../../infrastructure/multer/multer.config';
import { ProcessImageUseCase } from '../../application/use-cases/process-image.use-case';
import { PythonImageProcessorService } from '../../infrastructure/services/python-image-processor.service';

const upload = multer({ storage });
export const uploadRouter = express.Router();

const processorService = new PythonImageProcessorService();
const processImageUseCase = new ProcessImageUseCase(processorService);

uploadRouter.post('/', upload.single('image'), async (req, res) => {
  try {
    
    const filePath = (req as any).file?.path;

    if (!filePath) return res.status(400).send('Image is required');

    const processedImage = await processImageUseCase.execute(filePath);

    // return image 'image/png'
    res.set('Content-Type', 'image/png');
    res.send(processedImage);

    // return image 'base64'
    //const base64Image = processedImage.toString('base64');
    //res.json({ image: base64Image });
    //res.send(base64Image);

  } catch (error) {
    console.error(error);
    res.status(500).send('Processing failed');
  }
});
