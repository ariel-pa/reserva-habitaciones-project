
const express = require("express");
const router =express.Router();

const {getItems, createItem, updateItem, getItem, deleteItem} = require("../controllers/estado.controllers");


router.get("/estado", getItems);

router.get("/estado/:id", getItem);

router.post("/estado/create", createItem);

router.put("/estado/update/:id", updateItem);

router.delete("/estado/delete/:id", deleteItem);


module.exports = router
