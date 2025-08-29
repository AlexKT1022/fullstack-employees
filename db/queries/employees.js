import db from '#db/client';

/** @returns all employees */
export const getEmployees = async () => {
  const sql = `select * from employees`;
  const { rows } = await db.query(sql);

  return rows;
};

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const getEmployee = async (id) => {
  const sql = `
    select * from employees
    where id = ${id}
  `;
  const { rows } = await db.query(sql);

  return rows[0];
};

/** @returns the employee created according to the provided details */
export const createEmployee = async ({ name, birthday, salary }) => {
  const sql = `
    insert into employees(name, birthday, salary)
    values ($1, $2, $3)
    returning *
  `;
  const values = [name, birthday, salary];
  const res = await db.query(sql, values);

  return res.rows[0];
};

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const updateEmployee = async ({ id, name, birthday, salary }) => {
  const employee = await getEmployee(id);

  if (!employee) return undefined;

  const sql = `
    update employees
    set name = $2, birthday = $3, salary = $4
    where id = $1
  `;
  const values = [id, name, birthday, salary];
  const res = await db.query(sql, values);

  console.log(employee);

  return employee;
};

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const deleteEmployee = async (id) => {
  const deletedEmployee = await getEmployee(id);
  const sql = `
    delete from employees
    where id = ${id}
  `;
  db.query(sql);

  return deletedEmployee;
};
