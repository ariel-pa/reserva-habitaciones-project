const { habitacion } = require("../db/models/index");

const getItems = async (req, res) =>{
  try{
    const data = await habitacion.findAll();
    return res.status(200).send({data});
    }catch(e){
      return res.status(500).json({ message: "Error de servidor",})
    };
}

const getItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data = await habitacion.findOne({
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const createItem = async (req, res) =>{    
  try{
      const {body}  =  req;
      const data  = await habitacion.create(body);
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const updateItem = async (req, res) =>{ 
  try{
      const id = req.params.id;
      const body = req.body; 
      const data  = await habitacion.update(body, {
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const updateItemEstado = async (req, res) =>{ 
  try{
      const id = req.params.id;
      const body = req.body; 
      const data  = await habitacion.update(body, {
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};
//ocupado, mantenimiento, disponible, reservado

const deleteItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data  = await habitacion.destroy({
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    console.log(e);
    return res.status(500).json({ message: "Error de servidor",})
  }
};

module.exports = {getItems,getItem, createItem, updateItem, deleteItem, updateItemEstado}


