const {listContacts} = require('../models/contacts');

const getContactsList = async (req, res) => {
    const result = await listContacts();
    res.json(result);
}

module.exports = getContactsList;