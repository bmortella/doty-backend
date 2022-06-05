/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
// eslint-disable-next-line no-unused-vars
const should = chai.should();

describe("*********** GUARDIANS ***********", () => {
  describe("/GET guardian", () => {
    it("it should GET guardian info", (done) => {
      chai
        .request(server)
        .get("/guardian/5aa1c2c35ef7a4e97b5e995a")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.include.keys(
            "_id",
            "name",
            "email",
            "phone",
            "avatar"
          );
          done();
        });
    });
  });
});
