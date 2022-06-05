/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = "test";

const Pet = require("../app/models/pet");

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
let token = "";
let pet = "";

describe("*********** PETS ***********", () => {
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

  describe("/POST pet", () => {
    it("it should POST a pet", (done) => {
      chai
        .request(server)
        .post("/pets")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Lisa",
          sex: "Fêmea",
          size: "Grande",
          age: "3 anos",
          guardian: "5aa1c2c35ef7a4e97b5e995a",
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.include.keys(
            "_id",
            "name",
            "sex",
            "size",
            "age",
            "guardian"
          );
          pet = res.body._id;
          done();
        });
    });
  });

  describe("/DELETE pet", () => {
    it("it should DELETE a pet", (done) => {
      chai
        .request(server)
        .delete(`/pets/${pet}`)
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("msg").eql("DELETED");
          done();
        });
    });
  });
});
