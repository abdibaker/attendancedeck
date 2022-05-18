import request from 'supertest';
import {app} from '../../app'

it('should return a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201);
});

it('should return a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test',
      password: 'password'
    })
    .expect(400);
});

it('should return a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'wrong'
    })
    .expect(400);
});

it('should return a 400 with a missing email or password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test'
    })
    .expect(400)
  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'password'
    })
    .expect(400)
});
it('should disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201)
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(400)
});

it('should sets a cookie after successful signup', async () => {
  const res = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201)
  expect(res.get('Set-Cookie')).toBeDefined();
});