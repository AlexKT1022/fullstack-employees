import express from 'express';
import logger from '#middleware/logger';
import employees from '#api/employees';
import errorHandler from '#controllers/errorHandler';

const app = express();

app.use(express.json());

app.use(logger);

app.use(errorHandler);

app.use('/employees', employees);

app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API.');
});

export default app;
