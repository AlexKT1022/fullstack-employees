import { faker } from '@faker-js/faker';
import db from '#db/client';
import { createEmployee } from './queries/employees.js';

async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    const name = faker.person.fullName();
    const birthday = faker.date.past({ years: 60, refDate: new Date() });
    const salary = faker.number.int({ min: 50000, max: 350000 });
    const employee = {
      name,
      birthday,
      salary,
    };

    await createEmployee(employee);
  }
}

await db.connect();
await seedEmployees();
await db.end();

console.log('🌱 Database seeded.');
