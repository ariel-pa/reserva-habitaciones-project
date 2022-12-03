const { estado, reserva } = require("../db/models/index");


const getItems = async (req, res) =>{

  try{
    const data = await estado.findAll();
    return res.status(200).send({data});
    }catch(e){
      return res.status(500).json({ message: "Error de servidor",})
    };
}

const getItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data = await estado.findOne({
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
      // console.log(req.body)
      const {body}  =  req;
      const data  = await estado.create(body);
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const updateItem = async (req, res) =>{ 
  try{
      const id = req.params.id;
      const body = req.body; 
      const data  = await estado.update(body, {
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
      // console.log(id);
      const data  = await estado.destroy({
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

module.exports = {getItems, createItem, updateItem, getItem, deleteItem}

