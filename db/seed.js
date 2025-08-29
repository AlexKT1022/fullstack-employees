import { faker } from '@faker-js/faker';
import db from '#db/client';
import { createEmployee } from './queries/employees.js';

const seedEmployees = async () => {
  for (let i = 0; i < 20; i++) {
    const name = `${faker.person.firstName()} ${faker.person.lastName()}`;
    const birthday = faker.date.birthdate({ min: 17, max: 65 });
    const salary = faker.number.int({ min: 50000, max: 350000 });
    const employee = {
      name,
      birthday,
      salary,
    };

    await createEmployee(employee);
  }
};

await db.connect();
await seedEmployees();
await db.end();

console.log('🌱 Database seeded.');
