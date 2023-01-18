// import dotenv from "dotenv";
// import chai from "chai";
// import chaiHttp from "chai-http";

// import Blog from "../models/blog";
// import server from "../index";

// dotenv.config()

// chai.should();
// chai.use(chaiHttp);

// const blog = {
//     title:'flower',
//     description:'importace of flowers',
//     image:'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000',
//     comments:[]
// }

// describe('Blogs',() =>{
//     beforeEach((done) =>{
//         Blog.deleteMany({},error => {
//             done();
//         })
//     })
// });

// describe('GET /api/blog/all retrieve all blogs',() =>{
//     it('it should GET all the blogs',(done) =>{
//         chai.request(server).get('/api/blog/all').end((error,res) =>{
//             chai.expect(res).to.have.status(200);
//             chai.expect(res.body).to.be.a('array');
//             chai.expect(res.body.length).to.be.eql(0);
//             done();
//         })
//     })
// });

// describe('POST /api/blog/create',() =>{
//     it('it should POST/create a blog',(done) =>{
//         chai.request(server).post('/api/blog/create').send(blog).end((error,res) =>{
//             console.log(res.body);
//             chai.expect(res).to.have.status(201);
//             chai.expect(res.body.data).to.be.a('object');
//             done();
//         })
//     })
// });
