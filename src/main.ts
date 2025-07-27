import express from 'express';
import { configureExpress } from './config/express.config';
import { uploadRouter } from './presentation/controllers/upload.controller';

const app = express();
configureExpress(app);

app.use('/upload-image', uploadRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
