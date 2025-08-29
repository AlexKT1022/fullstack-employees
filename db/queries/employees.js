import db from '#db/client';

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

// === Part 2 ===

/** @returns all employees */
export const getEmployees = async () => {
  // TODO
};

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const getEmployee = async (id) => {
  // TODO
};

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const updateEmployee = async ({ id, name, birthday, salary }) => {
  // TODO
};

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export const deleteEmployee = async (id) => {
  // TODO
};
