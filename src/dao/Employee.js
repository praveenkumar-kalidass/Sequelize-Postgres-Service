const models = require('../models');

class EmployeeDao {
  getEmployess(findCB) {
    models.Employee.findAll()
      .then(
        (employees) => findCB(null, employees),
        (findErr) => findCB(findErr)
      );
  }

  getEmployeesCount(countCB) {
    models.Employee.count()
      .then(
        (count) => countCB(null, count),
        (countErr) => countCB(countErr)
      );
  }
}

module.exports = EmployeeDao;
