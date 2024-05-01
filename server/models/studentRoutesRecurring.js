module.exports = (sequelize, DataTypes) => {
  const StudentRoutesRecurring = sequelize.define('StudentRoutesRecurring', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    RouteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Route',
        key: 'id',
      },
    },
    StopId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Stop',
        key: 'id',
      },
    },
    StudentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Student',
        key: 'id',
      },
    },
    dayOfWeek: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return StudentRoutesRecurring;
};
