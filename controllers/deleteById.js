const {removeContact} = require("../models/contacts");

const deleteById = async (req, res) => {
    const {contactId} = req.params;
    const result = await removeContact(contactId);
    console.log(result);

    if(!result) {
        return res.status(404).json({ message: 'Not Found' })
    };

    res.json(`Contact by Id ${contactId}: deleted`);
}

module.exports = deleteById;