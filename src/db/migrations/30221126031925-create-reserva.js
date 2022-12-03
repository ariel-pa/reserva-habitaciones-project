'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      fecha_fin: {
        type: Sequelize.DATE
      },
      monto_cancelado: {
        type: Sequelize.FLOAT
      },
      dias: {
        type: Sequelize.INTEGER
      },
      fecha_reservacion: {
        type: Sequelize.DATE
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: "clientes",
          key: "id"
        }
      },
      id_pago: {
        type: Sequelize.INTEGER,
        references: {
          model: "tipo_pagos",
          key: "id"
        }
      },
      id_habitacion: {
        type: Sequelize.INTEGER,
        references: {
          model: "habitacions",
          key: "id"
        }
      },
      id_estado: {
        type: Sequelize.INTEGER,
        references: {
          model: "estados",
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
    await queryInterface.dropTable('reservas');
  }
};