'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seq_employee', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      empNo: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'emp_no',
        unique: true
      },
      birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'birth_date'
      },
      firstName: {
        type: Sequelize.STRING(14),
        allowNull: false,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING(16),
        allowNull: false,
        field: 'last_name'
      },
      gender: {
        type: Sequelize.ENUM('M', 'F'),
        allowNull: false,
        field: 'gender'
      },
      hireDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'hire_date'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seq_employee');
  }
};
