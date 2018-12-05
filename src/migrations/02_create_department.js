'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seq_department', {
      deptNo: {
        type: Sequelize.STRING(4),
        allowNull: false,
        field: 'dept_no',
        primaryKey: true
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
        field: 'created_at',
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seq_department');
  }
};
