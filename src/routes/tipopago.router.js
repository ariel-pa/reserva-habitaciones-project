
const express = require("express");
const router =express.Router();

const {getItems, createItem, deleteItem} = require("../controllers/tipopago.controllers");

router.get("/tipopago", getItems);

router.post("/tipopago/create", createItem);

router.delete("/tipopago/delete/:id", deleteItem);

module.exports = router
