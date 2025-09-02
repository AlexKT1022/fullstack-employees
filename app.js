import express from 'express';

import employeeRoutes from '#api/employees';
import errorHandler from '#middleware/errorHandler';
import logger from '#middleware/logger';

const app = express();

app.use(express.json());

app.use(logger);

app.use('/employees', employeeRoutes);

app.get('/', (req, res, next) => {
  res.send('Welcome to the Fullstack Employees API.');
});

app.use(errorHandler);

export default app;
