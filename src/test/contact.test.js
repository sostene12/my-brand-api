import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';

import Contact from '../models/contact';
import server from '../index';

dotenv.config();

chai.should();
chai.use(chaiHttp);

const contact = {
  fullName: 'Kaleb',
  email: 'kaleb@gmail.com',
  message: 'this is an important announcement',
};

let user = {
  username: 'sostene',
  email: 'sostene@gmail.com',
  password: 'sostene123',
  role:"admin"
};

let loginUser = {
  email: 'sostene@gmail.com',
  password: 'sostene123',
};

let id;
let token;

describe('Contacts', () => {
  beforeEach((done) => {
    Contact.deleteMany({}, (error) => {
      done();
    });
  });
});

describe('Contacts Operations', () => {

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
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('object');
        done();
      });
  });

  it('it should GET all contacts', (done) => {
    chai
      .request(server)
      .get('/api/contact/all')
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('array');
        done();
      });
  });

it('it should create contact ', (done) => {
    chai
      .request(server)
      .post('/api/contact/create')
      .send(contact)
      .end((error, res) => {
        chai.expect(res).to.have.status(201);
        chai.expect(res.body).to.be.a('object');
        id = res.body.data._id;
        done();
      });
  });

  it('it should GET single contact by id', (done) => {
    chai
      .request(server)
      .get(`/api/contact/${id}`)
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('object');
        done();
      });
  });

  it('it should DELETE single contact by id', (done) => {
    chai
      .request(server)
      .delete(`/api/contact/delete/${id}`)
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
