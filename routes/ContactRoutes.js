const express = require("express");
const router = express.Router();
const { getContacts, getSingleContacts, updateContacts, deleteContacts, createContacts } = require("../controllers/contactControllers");

router.route("/all").get(getContacts);

router.route("/:id").get(getSingleContacts);

router.route("/").post(createContacts);


router.route("/:id").put(updateContacts);


router.route("/:id").delete(deleteContacts);

module.exports = router;
