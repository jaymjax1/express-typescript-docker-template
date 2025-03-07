import request from 'supertest';
import app from '@/app';

describe('App', () => {
  // it('should respond with 404 for unknown routes', async () => {
  //   const response = await request(app).get('/unknown-route');
  //   expect(response.status).toBe(404);
  //   expect(response.body).toEqual({ error: 'Not Found' });
  // });

  describe('Health Check', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/api/health');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: 'OK' });
    });
  });
});
