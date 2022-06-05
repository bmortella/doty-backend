const faker = require("faker");
const ObjectID = require("mongodb").ObjectID;

module.exports = [
  {
    _id: new ObjectID("629b910d6c99dbc6c800ead5"),
    name: "Nala",
    sex: "Fêmea",
    size: "Pequeno",
    age: "3 anos",
    guardian: new ObjectID("5aa1c2c35ef7a4e97b5e995a"),
    adopted: false,
  },
];
