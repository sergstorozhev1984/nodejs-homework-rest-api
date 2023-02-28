const getAll = require("./getContactsList")
const getById = require("./getById")
const createContact = require("./createContact")
const updateById = require("./updateById")
const deleteById = require("./deleteById")
const updateStatusContact = require("./updateFavorite")

module.exports = {
    getAll,
    getById,
    createContact,
    updateById,
    deleteById,
    updateStatusContact,
}