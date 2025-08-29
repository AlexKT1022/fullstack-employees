import express from 'express';

import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from '#db/queries/employees';

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

router.post('/', async (req, res, next) => {
  const { id } = req.params;
  const { name, birthday, salary } = req.body;

  if (!id || !name || !birthday || !salary) res.sendStatus(500);

  const newEmployee = await createEmployee({ id, name, birthday, salary });

  if (!newEmployee) res.sendStatus(404);

  res.send(newEmployee);
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, birthday, salary } = req.body;

  if (!id || !name || !birthday || !salary) res.sendStatus(500);

  const updatedEmployee = await updateEmployee({ id, name, birthday, salary });

  if (!updatedEmployee) res.sendStatus(404);

  res.send(updatedEmployee);
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const deletedEmployee = await deleteEmployee(id);

  if (!deletedEmployee) res.sendStatus(404);

  res.send(deletedEmployee);
});

export default router;
