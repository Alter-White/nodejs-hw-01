import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts from file:', error);
    return [];
  }
};

console.log(await getAllContacts());
