const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/app");
const expect = chai.expect;

// Assertion style
chai.should();

chai.use(chaiHttp);

// GET route test for home route
describe("/Test the home route", () => {
  it("should get default API home route", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        const greetingMsg = res.body.greeting;
        expect(greetingMsg).to.be.eq(
          "Hello, i am Pavan Kulkarni, this is a backend API to get Youtube Subscribers"
        );
      });
    done();
  });
});
