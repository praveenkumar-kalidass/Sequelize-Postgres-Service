/**
 * Employee Model
 */
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      empNo: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'emp_no',
        unique: true
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'birth_date'
      },
      firstName: {
        type: DataTypes.STRING(14),
        allowNull: false,
        field: 'first_name'
      },
      lastName: {
        type: DataTypes.STRING(16),
        allowNull: false,
        field: 'last_name'
      },
      gender: {
        type: DataTypes.ENUM('M', 'F'),
        allowNull: false,
        field: 'gender'
      },
      hireDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'hire_date'
      }
    }, {
        freezeTableName: true,
        tableName: 'seq_employee'
    });
    return Employee;
};
