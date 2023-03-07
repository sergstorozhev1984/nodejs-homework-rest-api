const express = require("express");

const {validateBody, authenticate} = require("../../middlewares");

const {ctrlWrapper} = require("../../helpers");

const {schemas} = require("../../models/user");

const controllers = require("../../controllers/users");

const router = express.Router();

router.post("/signup", validateBody(schemas.registerSchema), ctrlWrapper(controllers.signup));

router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(controllers.login));

router.get("/logout", authenticate, ctrlWrapper(controllers.logout));

router.get("/current", authenticate, ctrlWrapper(controllers.getCurrent));

router.patch("/:id/subscription", authenticate, validateBody(schemas.subscriptionSchema), ctrlWrapper(controllers.updateSubscription))

module.exports = router;

