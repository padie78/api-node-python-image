import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  }
});
