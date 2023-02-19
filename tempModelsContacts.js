const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');
const contactsPath = path.resolve('models', 'contacts.json');

const listContacts = async () => {
  const contacts  = await fs.readFile(contactsPath, 'utf8');
  return JSON.parse(contacts);
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
    const contact = contacts.find(item => item.id === contactId);
    return contact || null;
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const filteredContacts = contacts.filter(el => el.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
}

const addContact = async (data) => {
  const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        ...data,
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(el => el.id === contactId);

  if(index === -1) return null;

  contacts[index] = {contactId, ...body}
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
