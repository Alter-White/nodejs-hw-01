import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

await removeAllContacts();
