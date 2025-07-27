import { Express } from 'express';
import cors from 'cors';
import express from 'express';

export function configureExpress(app: Express) {
  app.use(cors());
  app.use(express.json());
}
