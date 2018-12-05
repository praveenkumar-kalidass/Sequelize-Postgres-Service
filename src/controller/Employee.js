const express = require('express');
const EmployeeService = require('../service/Employee');
const router = express.Router();
const emplyeeService = new EmployeeService();

router.get('/all', (request, response) => {
  emplyeeService.getAllEmployess((getErr, employees) => {
    if (getErr) {
      console.error(getErr);
      response.status(500).send(getErr);
    }
    response.status(200).send(employees);
  });
});

router.get('/count', (request, response) => {
  emplyeeService.getNumberOfEmployees((getErr, count) => {
    if (getErr) {
      console.error(getErr);
      response.status(500).send(getErr);
    }
    response.status(200).send(count);
  });
});

module.exports = router;
