const asyncHandler = require("express-async-handler");

const Contacts = require('../models/contactModel');

//@desc Get All Contacts
//@route GET /api/contacts/all
//@access public

const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
});

//@desc Get Single Contacts
//@route GET /api/contacts/:id
//@access public

const getSingleContacts = asyncHandler( async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact);
});

//@desc Update Single Contacts
//@route PUT /api/contacts/:id
//@access public

const updateContacts = asyncHandler( async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }
    const updateContact = await Contacts.findByIdAndUpdate( req.params.id, req.body, { new: true } );
    res.status(200).json(updateContact);
});

//@desc Delete Single Contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContacts = asyncHandler( async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }
    const deleteContact = await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteContact);
});

//@desc Create Single Contacts
//@route POST /api/contacts/
//@access public

const createContacts = asyncHandler( async (req, res) => {
    const { name, mobile } = req.body;
    if(!name || !mobile){
        res.status(404);
        throw new Error("All Fields are mandatory");
    }
    const contact = await Contacts.create({
        name,
        mobile
    });
    res.status(200).json(contact);
});


module.exports = { getContacts, getSingleContacts, updateContacts, deleteContacts, createContacts };