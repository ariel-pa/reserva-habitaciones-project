'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class habitacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      habitacion.hasMany(models.reserva,{
        foreignKey: "id_habitacion"
      })
    }
  }
  habitacion.init({
    name: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    num_habitacion: DataTypes.INTEGER,
    capacidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'habitacion',
  });
  return habitacion;
};