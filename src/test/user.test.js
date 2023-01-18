import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';

import User from '../models/User';
import server from '../index';

dotenv.config();

chai.should();
chai.use(chaiHttp);

const user = {
  username: 'kaleb',
  email: 'kalebcurry@gmail.com',
  password: '12345',
};

let loginUser = {
    email: 'kalebcurry@gmail.com',
    password: '12345',
}

const updateUser = {
  username: 'kaleb curry',
  email: 'kalebcurry@gmail.com',
  password: 'kaleb12345',
};

let token;
let id;

describe('users', () => {
  beforeEach((done) => {
    User.deleteMany({}, (error) => {
      done();
    });
  });
});

describe('CRUD users endpoints', () => {
  it('it should create a user', (done) => {
    chai
      .request(server)
      .post('/api/user/create')
      .send(user)
      .end((error, res) => {
        chai.expect(res).to.have.status(201);
        chai.expect(res.body.data).to.be.a('object');
        done();
      });
  });
  it('it should log user in', (done) => {
    chai
      .request(server)
      .post('/api/user/login')
      .send(loginUser)
      .end((error, res) => {
        token = res.body.token;
        id = res.body.data._id;
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('object');
        done();
      });
  });

  it('it should get all users', (done) => {
    chai
      .request(server)
      .get('/api/user/all')
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('array');
        done();
      });
  });
  it('it should get single user', (done) => {
    chai
      .request(server)
      .get(`/api/user/${id}`)
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('object');
        done();
      });
  });

  it('it should delete a user', (done) => {
    chai
      .request(server)
      .delete(`/api/user/delete/${id}`)
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
  it('it should update a user', (done) => {
    chai
      .request(server)
      .put(`/api/user/update/${id}`)
      .set('token', `Bearer ${token}`)
      .send(updateUser)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
