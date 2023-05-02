const express = require("express");

const controllers = require("../../controllers/projects");

const { ctrlWrapper } = require("../../helpers/index");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/project");

const router = express.Router();

router.get("/", ctrlWrapper(controllers.getAll));
router.get("/filtered", ctrlWrapper(controllers.getFilteredProjects));

router.post(
  "/",
  validateBody(schemas.addSchema),
  ctrlWrapper(controllers.createProject)
);

module.exports = router;
