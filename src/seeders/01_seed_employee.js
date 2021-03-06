'use strict';
const employees = require('../storage/employee');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seq_employee',
      employees,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('seq_employee',
      null,
      {}
    );
  }
};
