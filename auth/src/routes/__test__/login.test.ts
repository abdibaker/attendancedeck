import request from 'supertest'
import {app} from '../../app'

it('should return a 200 on successful login', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201);
  await request(app)
    .post('/api/users/login')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(200);
});

it('should responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201);
  const res = await request(app)
    .post('/api/users/login')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(200);
  expect(res.get('Set-Cookie')).toBeDefined();
});

it('should return a 400 with an email that does not exist', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201);
  await request(app)
    .post('/api/users/login')
    .send({
      email: 'abdibaker1@gmail.com',
      password: 'password'
    })
    .expect(400)
});


it('should return a 400 with an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201);
  await request(app)
    .post('/api/users/login')
    .send({
      email: 'abdibaker1@gmail.com',
      password: 'dsaffasdfa'
    })
    .expect(400)
});

it('should return a 400 with a missing email or password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.test',
      password: 'password'
    })
    .expect(201);
  await request(app)
    .post('/api/users/login')
    .send({
      email: 'test@test.test'
    })
    .expect(400)
  await request(app)
    .post('/api/users/login')
    .send({
      password: 'password'
    })
    .expect(400)
});