'use strict';
const departments = require('../storage/department');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seq_department',
      departments,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('seq_department',
      null,
      {}
    );
  }
};
