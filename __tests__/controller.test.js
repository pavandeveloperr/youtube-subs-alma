const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

// Assertion style
chai.should();

chai.use(chaiHttp);

// GET route test to get all subscribers
describe("GET all subscribers", () => {
  it("should get all subscribers", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/subscribers")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(3);
        }
      });
    done();
  });
});

// GET route test to get single subscriber via ID
describe("GET single subscriber", () => {
  it("should get a single subscriber", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/subscribers/63b92200d26c66c088e7f1c0")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.length.should.be.eql(1);
          res.body.should.have.property('name');
          res.body.should.have.property('subscribedChannel');
        }
      });
    done();
  });
});

// POST route test to create new subscriber
describe("POST a subscriber", () => {
  it("should post a subscriber", (done) => {
    const subscriberData = {
      name: "Lucifer",
      subscribedChannel: "sentex"
    }
    chai
      .request("http://localhost:3000")
      .post("/subscribers")
      .send(subscriberData)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property('insertId');
          res.body.should.have.property('insertId').to.not.eq(0);
        }
      });
    done();
  });
});

// DELETE route test to delete a subscriber via ID
describe("DELETE a subscriber", () => {
  it("should delete a subscriber", (done) => {
    chai
      .request("http://localhost:3000")
      .delete("/subscribers/63b9220bd26c66c088e7f1c2")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
          const message = res.body.message
          expect(message).to.be.eq('deletion successful')
        }
      });
    done();
  });
});

// GET route test to get PATH '/subscribers/names'
describe("GET subscriber names", () => {
  it("should get a PATH /subscribers/names", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/subscribers/names")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.to.be.eq(3);
        }
      });
    done();
  });
});


// PATCH route test to update a subscriber
describe("UPDATE a subscriber", () => {
  it("should UPDATE a subscriber", (done) => {
    const subscriberData = {
      name: "Lucifer",
      subscribedChannel: "sentex"
    }
    chai
      .request("http://localhost:3000")
      .patch("/subscribers/63c154f45914921a37f2e1ea")
      .send(subscriberData)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
        }
      });
    done();
  });
});