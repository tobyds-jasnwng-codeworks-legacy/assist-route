module.exports = (db) => {
  db.Route.belongsToMany(db.Stop, { through: db.RouteStop });
  db.Stop.belongsToMany(db.Route, { through: db.RouteStop });
};
