
const express = require("express");
const router =express.Router();

const {getItems, createItem, updateItem, getItem, deleteItem} = require("../controllers/cliente.controllers");


router.get("/cliente", getItems);

router.get("/cliente/:id", getItem);

router.post("/cliente/create", createItem);

router.put("/cliente/update/:id", updateItem);

router.delete("/cliente/delete/:id", deleteItem);

module.exports = router
