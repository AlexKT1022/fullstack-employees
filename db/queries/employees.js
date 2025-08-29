import db from '#db/client';

/** @returns the employee created according to the provided details */
export const createEmployeeQuery = async ({ name, birthday, salary }) => {
  const sql = `
    insert into employees(name, birthday, salary)
    values ($1, $2, $3)
    returning *
  `;
  const values = [name, birthday, salary];
  const res = await db.query(sql, values);

  return res.rows[0];
};

// === Part 2 ===

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

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const updateEmployee = async ({ id, name, birthday, salary }) => {
  const sql = `
    update employees
    set name = $1, birthday = $2, salary = $3
    where id = ${id}
  `;
  const values = [name, birthday, salary];
  const res = await db.query(sql, values);

  return res;
};

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const deleteEmployee = async (id) => {
  // TODO
};
