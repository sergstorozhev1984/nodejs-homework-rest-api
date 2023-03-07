const {Contact} = require("../../models/contact");
// const paginate = require('mongoose-paginate');

const getPaginatedContacts = async (req, res) => {
    const {_id: owner} = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const options = {
        page,
        limit,
    };

    const result = await Contact.paginate({owner}, options);
    res.json(result); 
}

module.exports = getPaginatedContacts;