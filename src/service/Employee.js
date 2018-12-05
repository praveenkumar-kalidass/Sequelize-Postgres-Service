const EmployeeDao = require('../dao/Employee');
const employeeDao = new EmployeeDao();

class EmployeeService {
  getAllEmployess(getCB) {
    employeeDao.getEmployees((getErr, employees) => {
      if (getErr) {
        return getCB(getErr);
      }
      return getCB(null, employees);
    });
  }

  getNumberOfEmployees(getCB) {
    employeeDao.getEmployeesCount((getErr, count) => {
      if (getErr) {
        return getCB(getErr);
      }
      return getCB(null, {count: count});
    });
  }
}

module.exports = EmployeeService;
