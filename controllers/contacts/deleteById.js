const {Contact} = require("../../models/contact");

const deleteById = async (req, res) => {
    const {contactId} = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    console.log(result);

    if(!result) {
        return res.status(404).json({ message: 'Not Found' })
    };

    res.json(`Contact by Id ${contactId}: deleted`);
}

module.exports = deleteById;