const {Contact} = require("../../models/contact");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);

    contact
      ? res.json(contact)
      : res.status(404).json({ message: `Contact by Id ${contactId}: not found` });
}

module.exports = getById;