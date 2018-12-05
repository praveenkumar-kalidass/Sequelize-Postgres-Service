'use strict';
const empDepartments = require('../storage/employee_department');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seq_employee_department',
      empDepartments,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('seq_employee_department',
      null,
      {}
    );
  }
};
