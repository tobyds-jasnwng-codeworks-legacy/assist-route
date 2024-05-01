module.exports = (sequelize, DataTypes) => {
  const StudentContact = sequelize.define('StudentContact', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    StudentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Student',
        key: 'id',
      },
    },
    ContactId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Contact',
        key: 'id',
      },
    },
    relationToStudent: {
      type: DataTypes.STRING,
    },
  });

  return StudentContact;
};
