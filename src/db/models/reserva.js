'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reserva.belongsTo(models.tipo_pago,{
        foreignKey: "id_pago"
      })

      reserva.belongsTo(models.estado,{
        foreignKey: "id_estado"
      })

      reserva.belongsTo(models.cliente,{
        foreignKey: "id_cliente"
      })

      reserva.belongsTo(models.habitacion,{
        foreignKey: "id_habitacion"
      })

      reserva.hasMany(models.factura,{
        foreignKey: "id_reserva"
      })
    }
  }
  reserva.init({
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    monto_cancelado: DataTypes.FLOAT,
    dias: DataTypes.INTEGER,
    fecha_reservacion: DataTypes.DATE,
    id_cliente: DataTypes.INTEGER,
    id_pago: DataTypes.INTEGER,
    id_habitacion: DataTypes.INTEGER,
    id_estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reserva',
  });
  return reserva;
};