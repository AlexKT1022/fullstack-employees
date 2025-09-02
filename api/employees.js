import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from '#db/queries/employees';
import express from 'express';

const router = express.Router();

/**
 * @route GET /employees
 */
router.get('/', async (req, res) => {
  const employees = await getEmployees();

  return res.send(employees);
});

/**
 * @route GET /employees/:id
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!/^-?\d+(\.\d+)?$/.test(id)) return res.status(400).send('invalid id');

  const employee = await getEmployee(id);

  if (!employee) return res.status(404).send('employee not found');

  return res.send(employee);
});

/**
 * @route POST /employees
 */
router.post('/', async (req, res) => {
  if (!req.body) return res.status(400).send('no body provided');
  if (!req.body.name || !req.body.birthday || !req.body.salary)
    return res.status(400).send('required fields not provided');

  const newEmployee = await createEmployee(req.body);

  return res.status(201).send(newEmployee);
});

/**
 * @route PUT /employees/:id
 */
router.put('/:id', async (req, res) => {
  if (!req.body) return res.status(400).send('no body provided');
  if (!req.body.name || !req.body.birthday || !req.body.salary)
    return res.status(400).send('required fields not provided');

  const { id } = req.params;
  if (!/^-?\d+(\.\d+)?$/.test(id)) return res.status(400).send('invalid id');

  const updatedEmployee = await updateEmployee({ id, ...req.body });
  if (!updatedEmployee) return res.status(404).send('employee not found');

  return res.send(updatedEmployee);
});

/**
 * @route DELETE /employees/:id
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!/^-?\d+(\.\d+)?$/.test(id)) return res.status(400).send('invalid id');

  const deletedEmployee = await deleteEmployee(id);
  if (!deletedEmployee) return res.status(404).send('employee not found');

  return res.status(204).send(deletedEmployee);
});

export default router;
