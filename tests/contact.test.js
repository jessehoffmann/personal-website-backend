const request = require('supertest');
const app = require('../app');

describe('Contact Endpoint', () => {
  it('should handle contact form submission', async () => {
    const contactData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message'
    };

    const response = await request(app)
      .post('/contact')
      .send(contactData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
}); 