const request = require('supertest');
const app = require('../index');
const Contact = require('../models/Contact');

describe('Contact API', () => {
  beforeEach(async () => {
    await Contact.deleteMany();
  });

  test('GET /contacts - should return empty array', async () => {
    const response = await request(app).get('/contacts');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });

  test('POST /contacts - should create new contact', async () => {
    const response = await request(app)
      .post('/contacts')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '+1234567890'
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe('John Doe');
  });
});