module.exports = (sequelize, DataTypes) => {
  const RouteStop = sequelize.define('RouteStop', {
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
    stopOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return RouteStop;
};
