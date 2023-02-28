const {Contact} = require("../models/contact");

const getAll = async (_, res) => {
    const result = await Contact.find({});
    console.log(result);
    res.json(result);
    return result
}

module.exports = getAll;