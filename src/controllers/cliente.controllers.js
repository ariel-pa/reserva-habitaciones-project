const { cliente } = require("../db/models/index");


const getItems = async (req, res) =>{
  try{
    const data = await cliente.findAll();
    return res.status(200).send({data});
    }catch(e){
      return res.status(500).json({ message: "Error de servidor",})
    };
}

const getItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data = await cliente.findOne({
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
      const data  = await cliente.create(body);
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const updateItem = async (req, res) =>{ 
  try{
      const id = req.params.id;
      const body = req.body; 
      const data  = await cliente.update(body, {
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const deleteItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data  = await cliente.destroy({
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

module.exports = {getItems, createItem, updateItem, getItem, deleteItem}


