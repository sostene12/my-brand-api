import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';

import Blog from '../models/blog';
import server from '../index';

dotenv.config();

chai.should();
chai.use(chaiHttp);

let id;
let token;

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

const comment = {
    name:"kaleb",
    comment:"this is wonderful"
}

describe('Blogs', () => {
  beforeEach((done) => {
    Blog.deleteMany({}, (error) => {
      done();
    });
  });
});

describe('BLOGS OPERATIONS', () => {
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

  it('it should GET all the blogs', (done) => {
    chai
      .request(server)
      .get('/api/blog/all')
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('array');
        id = res.body.data[0]._id;
        done();
      });
  });
  it('it should get single blog', (done) => {
    chai
      .request(server)
      .get(`/api/blog/${id}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body.data).to.be.a('object');
        done();
      });
  });

  it('it should comment on a blog', (done) => {
    chai
      .request(server)
      .put(`/api/blog/comment/${id}`)
      .set('token', `Bearer ${token}`)
      .send(comment)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.body.data.comments).to.be.a('array');
        done();
      });
  });

  it('it should delete single blog', (done) => {
    chai
      .request(server)
      .delete(`/api/blog/delete/${id}`)
      .set('token', `Bearer ${token}`)
      .end((error, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
