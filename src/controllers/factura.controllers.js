const { factura, habitacion, reserva, cliente} = require("../db/models/index");


const getItems = async (req, res) =>{
  try{
    const data = await factura.findAll({
      include: [
        {model: cliente},
        {model: reserva},
      ],
    });
    return res.status(200).send({data});
    }catch(e){
      console.log(e);
      return res.status(500).json({ message: "Error de servidor",})
    };
}

const getItem = async (req, res) =>{
  try{
      const {id} = req.params;
      const data = await factura.findOne({
        where:{
          id,
        },
        include: [
          {model: cliente},
        ],
      });
      console.log(data);
      const reservas = await reserva.findOne({
        where:{
          id_cliente: data.dataValues.id_cliente,
        },
        include: [
          {model: habitacion},
          // {model: habitacion},
        ],
      });
      // console.log(reservas);
      res.send({
      data,
      reservas});
  }catch(e){
    console.log(e);
    return res.status(500).json({ message: "Error de servidor",})
  }
};

const createItem = async (req, res) =>{    
  try{
      const {body} = req;
      const data  = await factura.create(body);
      res.send({data});     
  }catch(e){
    // console.log(e)
    return res.status(500).json({ message: "Error de servidor",})
  }
};

// const updateItem = async (req, res) =>{ 
//   try{
//       const id = req.params.id;
//       const body = req.body; 
//       const data  = await reserva.update(body, {
//         where:{
//           id,
//         }
//       });
//       res.send({data});
//   }catch(e){
//     return res.status(500).json({ message: "Error de servidor",})
//   }
// };


module.exports = {getItems, getItem, createItem}

