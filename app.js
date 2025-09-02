import errorHandler from '#middleware/errorHandler';
import logger from '#middleware/logger';
import express from 'express';

const app = express();

app.use(express.json());

app.use(logger);

app.use('/employees', employees);

app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API.');
});

app.use(errorHandler);

export default app;
