const express = require("express");
const controllers = require("../../controllers");
const {ctrlWrapper} = require("../../helpers/index");
const validateBody = require("../../middlewares/index");
const {addSchema} = require("../../schema/contact");

const router = express.Router();

router.get("/", ctrlWrapper(controllers.getContactsList));

router.get("/:contactId", ctrlWrapper(controllers.getById));

router.post("/", validateBody(addSchema), ctrlWrapper(controllers.createContact));

router.delete("/:contactId", ctrlWrapper(controllers.deleteById));

router.put("/:contactId", validateBody(addSchema), ctrlWrapper(controllers.updateById));

module.exports = router;
