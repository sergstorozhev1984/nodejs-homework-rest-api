const {getContactById} = require("../models/contacts");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    contact
      ? res.json(contact)
      : res.status(404).json({ message: `Contact by Id ${contactId}: not found` });
}

module.exports = getById;