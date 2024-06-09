import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    contacts = contacts.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error executing Thanos snap:', error);
  }
};

await thanos();
