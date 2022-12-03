'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      factura.belongsTo(models.cliente,{
        foreignKey: "id_cliente"
      })

      factura.belongsTo(models.reserva,{
        foreignKey: "id_reserva"
      })
    }
  }
  factura.init({
    num_factura: DataTypes.INTEGER,
    fecha_facturacion: DataTypes.DATE,
    total_factura: DataTypes.FLOAT,
    id_cliente: DataTypes.INTEGER,
    id_reserva: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factura',
  });
  return factura;
};