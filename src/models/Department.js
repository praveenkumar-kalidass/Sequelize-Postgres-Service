/**
 * Department Model
 */
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
      deptNo: {
        type: DataTypes.STRING(4),
        allowNull: false,
        field: 'dept_no',
        primaryKey: true
      },
      deptName: {
        type: DataTypes.STRING(40),
        allowNull: false,
        field: 'dept_name',
        unique: true
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
        tableName: 'seq_department'
    });
    return Department;
};
