const express = require("express");
const controllers = require("../../controllers");
const {ctrlWrapper} = require("../../helpers/index");
const validateBody = require("../../middlewares/index");
const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(controllers.getAll));

router.get("/:contactId", ctrlWrapper(controllers.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(controllers.createContact));

router.delete("/:contactId", ctrlWrapper(controllers.deleteById));

router.put("/:contactId", validateBody(schemas.addSchema), ctrlWrapper(controllers.updateById));
router.patch("/:contactId/favorite", validateBody(schemas.updateFavoriteSchema), ctrlWrapper(controllers.updateStatusContact));

module.exports = router;
