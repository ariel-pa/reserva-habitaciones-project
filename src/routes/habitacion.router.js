
const express = require("express");
const router =express.Router();

const {getItems,getItem, createItem, updateItem, updateItemEstado, deleteItem} = require("../controllers/habitacion.controllers");


router.get("/habitacion", getItems);

router.get("/habitacion/:id", getItem);

router.post("/habitacion/create", createItem);

router.put("/habitacion/update/:id", updateItem);

router.put("/habitacion/estado/:id", updateItemEstado);

router.delete("/habitacion/delete/:id", deleteItem);


module.exports = router
