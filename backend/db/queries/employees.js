import db from '#db/client';

/** @returns all employees */
export const getEmployees = async () => {
  const sql = `SELECT * FROM employees`;
  const { rows } = await db.query(sql);

  return rows;
};

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const getEmployee = async (id) => {
  const sql = `
    SELECT * FROM employees
    WHERE id = $1
  `;
  const { rows } = await db.query(sql, [id]);

  return rows[0];
};

/** @returns the employee created according to the provided details */
export const createEmployee = async ({ name, birthday, salary }) => {
  const sql = `
    INSERT INTO employees(name, birthday, salary)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const { rows } = await db.query(sql, [name, birthday, salary]);

  return rows[0];
};

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const updateEmployee = async ({ id, name, birthday, salary }) => {
  const sql = `
    UPDATE employees
    SET name = $2, birthday = $3, salary = $4
    WHERE id = $1
    RETURNING *
  `;
  const { rows } = await db.query(sql, [id, name, birthday, salary]);

  return rows[0];
};

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const deleteEmployee = async (id) => {
  const sql = `
    DELETE FROM employees
    WHERE id = $1
    RETURNING *
  `;
  const { rows } = await db.query(sql, [id]);

  console.log(rows);

  return rows[0];
};
