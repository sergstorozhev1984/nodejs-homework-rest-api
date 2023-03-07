const express = require("express");

const controllers = require("../../controllers/contacts");

const {ctrlWrapper} = require("../../helpers/index");

const {validateBody, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(controllers.getAll));

router.get("/paginate", authenticate, ctrlWrapper(controllers.getPaginatedContacts));

router.get("/favorite", authenticate, ctrlWrapper(controllers.getFavoriteContacts))


router.get("/:contactId", authenticate, ctrlWrapper(controllers.getById));

router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(controllers.createContact));

router.delete("/:contactId", authenticate, ctrlWrapper(controllers.deleteById));

router.put("/:contactId", authenticate, validateBody(schemas.addSchema), ctrlWrapper(controllers.updateById));

router.patch("/:contactId/favorite", authenticate, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(controllers.updateStatusContact));

module.exports = router;
