/**
 * Department Model
 */
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
      deptNo: {
        type: Sequelize.STRING(4),
        allowNull: false,
        field: 'dept_no',
        unique: true
      },
      deptName: {
        type: Sequelize.STRING(40),
        allowNull: false,
        field: 'dept_name',
        unique: true
      }
    }, {
        freezeTableName: true,
        tableName: 'seq_department'
    });
    return Department;
};
