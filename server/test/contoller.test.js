const app = require('../app');
const supertest = require('supertest');
const db = require('../models');
const { seedData, newData } = require('./data');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

describe('User Endpoints', () => {
  const request = supertest(app);

  beforeAll(async () => {
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running for testing at ${HOST}:${PORT}`);
    });
    seedData.forEach((student) => {
      db.Student.create(student);
    });
  });

  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });

  it('GET /students should show all students', async () => {
    const res = await request.get('/students');
    console.log('GET', res.body);
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body[0]).toEqual(expect.objectContaining(seedData[0]));
    expect(res.body[1]).toEqual(expect.objectContaining(seedData[1]));
    expect(res.body[2]).toEqual(expect.objectContaining(seedData[2]));
  });

  it('POST /students should return a new student', async () => {
    const res = await request.post('/students').send(newData);
    expect(res.status).toEqual(201);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual(expect.objectContaining(newData));
  })

  it('POST /students should add a new student to the db', async () => {
    const res = await request.post('/students').send(newData);
    const dbRes = await db.Student.findOne({ where: { firstName: newData.firstName } });
    expect(dbRes.dataValues).toEqual(expect.objectContaining(newData));
  })

  // it('DELETE /students/:id should delete a student from the db', async () => {
  //   const id = 1;
  //   const res = await request.delete(`/students/${id}`).send(newData);
  //   const dbRes = await db.Student.findOne({ where: { id: id } });
  //   expect(res.status).toEqual(204);
  //   expect(dbRes).toEqual(null);
  // })
});
