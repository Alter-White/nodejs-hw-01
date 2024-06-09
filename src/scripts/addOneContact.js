import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';
import { promises as fs } from 'fs';

export const addOneContact = async () => {
  try {
    let existingContacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      existingContacts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    const newContact = createFakeContact();

    existingContacts.push(newContact);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(existingContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

await addOneContact();
