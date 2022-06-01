/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = "test";

const User = require("../app/models/user");
const faker = require("faker");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const loginDetails = {
  email: "caozinho@ong.com",
  password: "12345",
  role: "guardian",
};
const signUpDetails = {
  name: "Beatriz",
  email: "beatriz@gmail.com",
  phone: "11999999999",
  password: "12345678",
  role: "guardian",
};
let token = "";
const createdID = [];
const badLoginDetails = {
  email: "admin@admin.com",
  password: "12345678",
};

chai.use(chaiHttp);

describe("*********** AUTH ***********", () => {
  describe("/GET /404url", () => {
    it("it should GET 404 url", (done) => {
      chai
        .request(server)
        .get("/404url")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");
          done();
        });
    });
  });

  describe("/POST login", () => {
    it("it should GET token", (done) => {
      chai
        .request(server)
        .post("/login")
        .send(loginDetails)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("token");
          token = res.body.token;
          done();
        });
    });
  });

  describe("/GET token", () => {
    it("it should NOT be able to consume the route since no token was sent", (done) => {
      chai
        .request(server)
        .get("/token")
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
    it("it should GET a fresh token", (done) => {
      chai
        .request(server)
        .get("/token")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });

  describe("/POST login", () => {
    it("it should NOT POST login after password fail", (done) => {
      chai
        .request(server)
        .post("/login")
        .send(badLoginDetails)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a("object");
          res.body.should.have.property("errors").that.has.property("msg");
          res.body.errors.should.have.property("msg").eql("WRONG_PASSWORD");
          done();
        });
    });
  });

  describe("/POST signup", () => {
    it("it should register user", (done) => {
      chai
        .request(server)
        .post("/signup")
        .send(signUpDetails)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          res.body.should.have.property("user");
          done();
        });
    });
  });

  after(() => {
    createdID.forEach((id) => {
      User.findByIdAndRemove(id, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  });
});
