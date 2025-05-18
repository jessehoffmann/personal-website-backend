const request = require('supertest');
const app = require('../app');

describe('Index Route', () => {
  it('should return welcome message', async () => {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Welcome to Jesse Thomas Hoffmann's portfolio"
    });
  });
}); 