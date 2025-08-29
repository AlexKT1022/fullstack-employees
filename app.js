import express from 'express';

import employees from '#api/employees';
import errorHandler from '#middleware/errorHandler';
import logger from '#middleware/logger';

const app = express();

app.use(express.json());

app.use(logger);

app.use('/employees', employees);

app.use(errorHandler);

app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API.');
});

export default app;
