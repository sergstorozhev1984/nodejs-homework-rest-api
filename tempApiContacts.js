// const express = require("express");
// const Joi = require("Joi");

// const {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContact,
//   updateContact,
// } = require("../../models/contacts");

// const router = express.Router();

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

// router.get("/", async (req, res, next) => {
//   try {
//     const contacts = await listContacts();
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: `${error.message}` });
//   }
// });

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const contact = await getContactById(contactId);

//     contact
//       ? res.json(contact)
//       : res
//           .status(404)
//           .json({ message: `Contact by Id ${contactId}: not found` });
//   } catch (error) {
//     res.status(500).json({ message: `${error.message}` });
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     console.log(req.body);
//     const { err } = addSchema.validate(req.body);

//     if (err) {
//       return res.status(400).json({ message: "Missing required name field" });
//     }

//     const newContact = await addContact(req.body);
//     res.status(201).json(newContact);
//   } catch (error) {
//     res.status(500).json({ message: `${error.message}` });
//   }
// });

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     await removeContact(contactId);
//     res.json(`Contact by Id ${contactId}: deleted`);
//   } catch (error) {
//     res.status(500).json({ message: `${error.message}` });
//   }
// });

// router.put("/:contactId", async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: "Missing fields" });
//     }
//     const { contactId } = req.params;
//     const result = await updateContact(contactId, req.body);
//     if (!result)
//       return res
//         .status(404)
//         .json({ message: `Contact by ID ${contactId}: not found` });
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).json({ message: `${error.message}` });
//   }
// });

// module.exports = router;
