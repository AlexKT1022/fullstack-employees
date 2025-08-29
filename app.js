import express from 'express';

import employees from '#api/employees';
import errorHandler from '#controllers/errorHandler';
import logger from '#middleware/logger';

const app = express();

app.use(express.json());

app.use(logger);

app.use(errorHandler);

app.use('/employees', employees);

app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API.');
});

export default app;
