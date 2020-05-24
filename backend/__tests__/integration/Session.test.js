const request = require('supertest');
const app = require('../../src/app');

describe('Testing session routes', () => {
  describe('POST: /sessions', () => {
    test('should return HTTP status 400 when email and password are undefined', async (done) => {
      const response = await request(app)
        .post('/api/doareamar/v1/sessions');

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid payload.');

      done();
    });

    test('should return HTTP status 400 when email is invalid', async (done) => {
      const response = await request(app)
        .post('/api/doareamar/v1/sessions')
        .send({
          email: 'invalidemailformat',
          password: 'strongpass',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid payload.');

      done();
    });

    test('should return HTTP status 403 when password does not match', async (done) => {
      // criar um usuário
      // fazer a requisição

      expect(true).toBe(true);

      done();
    });

    test('should return HTTP status 200 when user successfully authenticates', async (done) => {
      expect(true).toBe(true);

      done();
    });
  });
});
