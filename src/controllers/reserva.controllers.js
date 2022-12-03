const { cliente,tipo_pago,habitacion, estado, reserva } = require("../db/models/index");


const getItems = async (req, res) =>{
  try{
    const data = await reserva.findAll({
      include: [
        {model: cliente},
        {model: tipo_pago},
        {model: habitacion},
        {model: estado}
      ],
    });
    return res.status(200).send({data});
    }catch(e){
      return res.status(500).json({ message: "Error de servidor",})
    };
}

const getItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data = await reserva.findOne({
        where:{
          id,
        },
        include: [
          {model: cliente},
          {model: tipo_pago},
          {model: habitacion},
          {model: estado}
        ],
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const createItem = async (req, res) =>{    
  try{
      const {body} = req;
      const id = body.id_habitacion;
      const {dataValues} = await habitacion.findOne({
        where:{
          id,
        }
      });

      if(dataValues.estado === "Disponible"){
        // console.log(body);
        const data  = await reserva.create(body);
        res.send({data});   

        const bodyEstado = {
          estado: "Ocupado",
        }; 
        const estado  = await habitacion.update(bodyEstado, {
          where:{
            id,
          }
        });

      }else{
        res.send({message: "Habitacion no disponible"});   
      }
        
  }catch(e){
    console.log(e)
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const updateItem = async (req, res) =>{ 
  try{
      const id = req.params.id;
      const body = req.body; 
      const data  = await reserva.update(body, {
        where:{
          id,
        }
      });
      res.send({data});
  }catch(e){
    return res.status(500).json({ message: "Error de servidor",})
  }
};


module.exports = {getItems, createItem, updateItem, getItem}

