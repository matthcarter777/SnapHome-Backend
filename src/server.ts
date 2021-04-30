import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import http  from 'http';

import router from './routes';
import { AppError } from './errors/AppError';
import './database';

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3333;

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if(err instanceof AppError ) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`,
  });
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`HTTP Server started on port ${port}`);
});
