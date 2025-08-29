import express from 'express';

import { getEmployee, getEmployees } from '#db/queries/employees';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const employees = await getEmployees();

  res.send(employees);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const employee = await getEmployee(id);

  if (!employee) res.sendStatus(404);

  res.send(employee);
});

export default router;
