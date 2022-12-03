'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_factura: {
        type: Sequelize.INTEGER
      },
      fecha_facturacion: {
        type: Sequelize.DATE
      },
      total_factura: {
        type: Sequelize.FLOAT
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: "clientes",
          key: "id"
        }
      },
      id_reserva: {
        type: Sequelize.INTEGER,
        references: {
          model: "reservas",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('facturas');
  }
};