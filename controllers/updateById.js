const {updateContact} = require("../models/contacts");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result)
      return res
        .status(404)
        .json({ message: `Contact by ID ${contactId}: not found` });
    res.status(201).json(result);
}

module.exports = updateById;