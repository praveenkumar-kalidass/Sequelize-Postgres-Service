'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seq_department', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      deptNo: {
        type: Sequelize.STRING(4),
        allowNull: false,
        field: 'dept_no',
        unique: true
      },
      deptName: {
        type: Sequelize.STRING(40),
        allowNull: false,
        field: 'dept_name',
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seq_department');
  }
};
