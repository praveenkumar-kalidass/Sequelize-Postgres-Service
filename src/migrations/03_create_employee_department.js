'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seq_employee_department', {
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
        references: {
          model: {
            tableName: 'seq_employee',
          },
          key: 'emp_no'
        }
      },
      deptNo: {
        type: Sequelize.STRING(4),
        allowNull: false,
        field: 'dept_no',
        references: {
          model: {
            tableName: 'seq_department',
          },
          key: 'dept_no'
        }
      },
      fromDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'from_date'
      },
      toDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'to_date'
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
    return queryInterface.dropTable('seq_employee_department');
  }
};
