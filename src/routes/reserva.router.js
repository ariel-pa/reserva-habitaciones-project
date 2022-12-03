
const express = require("express");
const router =express.Router();

const {getItems, createItem, updateItem, getItem} = require("../controllers/reserva.controllers");

router.get("/reserva", getItems);

router.get("/reserva/:id", getItem);

//TODO: Reservar habitaciones diponibles
router.post("/reserva/create", createItem);

router.put("/reserva/update/:id", updateItem);

module.exports = router
