'use strict';

const students = require('../data/students.js');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      students.map((student) =>
        Object.assign({}, student, {
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      )
    );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Students', null, {});
  },
};
