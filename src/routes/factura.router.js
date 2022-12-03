
const express = require("express");
const router =express.Router();

const {getItems, getItem, createItem} = require("../controllers/factura.controllers");

router.get("/factura", getItems);

router.get("/factura/:id", getItem);

router.post("/factura/create", createItem);

module.exports = router
