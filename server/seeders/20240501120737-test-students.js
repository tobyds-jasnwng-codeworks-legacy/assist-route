/* eslint-disable node/no-unsupported-features/es-syntax */
'use strict';

const students = require('../data/students.js');
const contacts = require('../data/contacts.js');
const sequelize = require('../models');

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
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('StudentContacts', null, {
      truncate: true,
      cascade: true,
    });
    await queryInterface.bulkDelete('Contacts', null, {
      truncate: true,
      cascade: true,
    });
    await queryInterface.bulkDelete('Students', null, {
      truncate: true,
      cascade: true,
    });
    // Reset Auto Increment IDs
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Contacts_id_seq" RESTART WITH 1'
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Students_id_seq" RESTART WITH 1'
    );
    return await queryInterface.sequelize.query(
      'ALTER SEQUENCE "StudentContacts_id_seq" RESTART WITH 1'
    );
  },
};
