const { tipo_pago } = require("../db/models/index");


const getItems = async (req, res) =>{
  try{
    const data = await tipo_pago.findAll();
    return res.status(200).send({data});
    }catch(e){
      return res.status(500).json({ message: "Error de servidor",})
    };
}


const createItem = async (req, res) =>{    
  try{
      const {body}  =  req;
      const data  = await tipo_pago.create(body);
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};



const deleteItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data  = await tipo_pago.destroy({
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

module.exports = {getItems, createItem, deleteItem}


