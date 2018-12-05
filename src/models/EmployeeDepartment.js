/**
 * Employee Department Model
 */
module.exports = (sequelize, DataTypes) => {
    const EmployeeDepartment = sequelize.define('EmployeeDepartment', {
      empNo: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'emp_no'
      },
      deptNo: {
        type: DataTypes.STRING(4),
        allowNull: false,
        field: 'dept_no'
      },
      fromDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'from_date'
      },
      toDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'to_date'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    }, {
        freezeTableName: true,
        tableName: 'seq_employee_department'
    });
    return EmployeeDepartment;
};
