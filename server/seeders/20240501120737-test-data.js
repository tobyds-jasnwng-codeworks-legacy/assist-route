/* eslint-disable node/no-unsupported-features/es-syntax */
'use strict';

const students = require('../data/students.js');
const contacts = require('../data/contacts.js');
const stops = require('../data/stops.js');

module.exports = {
  async up (queryInterface) {
    // Seed Students
    await Promise.all(
      students.map((student) =>
        queryInterface.bulkInsert('Students', [
          {
            ...student,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      )
    );

    // Seed Contacts
    await Promise.all(
      contacts.map((contact) =>
        queryInterface.bulkInsert('Contacts', [
          {
            ...contact,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      )
    );

    // Seed StudentContacts
    await queryInterface.bulkInsert(
      'StudentContacts',
      students.flatMap((student, index) => {
        // For each student, assign a random pair of contacts
        const shuffledContacts = [...contacts].sort(() => 0.5 - Math.random());
        const selectedContacts = shuffledContacts.slice(0, 2);

        return selectedContacts.map((contact, contactIndex) => {
          return {
            StudentId: index + 1, // assuming student IDs are sequential and start from 1
            ContactId: contactIndex + 1, // assuming contact IDs are sequential and start from 1
            relationToStudent: contactIndex === 0 ? 'Mother' : 'Father', // assign one as 'Mother' and one as 'Father'
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        });
      })
    );
    await queryInterface.bulkInsert(
      'Stops',
      stops.map((stop) => ({
        ...stop,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('StudentContacts', null, {});
    await queryInterface.bulkDelete('Contacts', null, {});
    await queryInterface.bulkDelete('Students', null, {});
    await queryInterface.bulkDelete('Stops', null, {});
    await queryInterface.bulkDelete('RouteStops', null, {});
    await queryInterface.bulkDelete('Routes', null, {});
    await queryInterface.bulkDelete('StudentStopsRecurring', null, {});
    // Reset Auto Increment IDs
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "StudentContacts_id_seq" RESTART WITH 1'
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Contacts_id_seq" RESTART WITH 1'
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Students_id_seq" RESTART WITH 1'
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Stops_id_seq" RESTART WITH 1'
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "RouteStops_id_seq" RESTART WITH 1'
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Routes_id_seq" RESTART WITH 1'
    );
    return await queryInterface.sequelize.query(
      'ALTER SEQUENCE "StudentRoutesRecurring_id_seq" RESTART WITH 1'
    );
  },
};
