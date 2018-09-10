/**
 * Employee Department Model
 */
module.exports = (sequelize, DataTypes) => {
    const EmployeeDepartment = sequelize.define('EmployeeDepartment', {
      empNo: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'emp_no'
      },
      deptNo: {
        type: Sequelize.STRING(4),
        allowNull: false,
        field: 'dept_no'
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
      }
    }, {
        freezeTableName: true,
        tableName: 'seq_employee_department'
    });
    return EmployeeDepartment;
};
