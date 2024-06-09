import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { promises as fs } from 'fs';

const generateContacts = async (number) => {
  try {
    let existingContacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      existingContacts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = existingContacts.concat(newContacts);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
