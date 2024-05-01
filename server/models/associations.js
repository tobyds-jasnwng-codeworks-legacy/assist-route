module.exports = (db) => {
  db.Route.belongsToMany(db.Stop, {
    through: db.RouteStop,
    foreignKey: 'RouteId',
  });
  db.Stop.belongsToMany(db.Route, {
    through: db.RouteStop,
    foreignKey: 'StopId',
  });
  db.Student.belongsToMany(db.Contact, {
    through: db.StudentContact,
    foreignKey: 'StudentId',
  });
  db.Contact.belongsToMany(db.Student, {
    through: db.StudentContact,
    foreignKey: 'ContactId',
  });
  db.Student.belongsToMany(db.Route, {
    through: db.StudentRoutesRecurring,
    foreignKey: 'StudentId',
  });
  db.Route.belongsToMany(db.Student, {
    through: db.StudentRoutesRecurring,
    foreignKey: 'RouteId',
  });
  db.Stop.belongsToMany(db.Student, {
    through: db.StudentRoutesRecurring,
    foreignKey: 'StopId',
  });
};
