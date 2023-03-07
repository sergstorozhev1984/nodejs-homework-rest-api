const { Contact } = require("../../models/contact");

const getFavoriteContacts = async (req, res) => {
  const favorite = req.query.favorite;
  const filter = {};
  if (favorite !== undefined) {
    filter.favorite = favorite;
    }
    const contacts = await Contact.find(filter);
    res.json(contacts);
};

module.exports = getFavoriteContacts;
