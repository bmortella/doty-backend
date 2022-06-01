const faker = require("faker");
const ObjectID = require("mongodb").ObjectID;

module.exports = [
  {
    _id: new ObjectID("5aa1c2c35ef7a4e97b5e995a"),
    name: "ONG Caozinho",
    email: "caozinho@ong.com",
    password: "$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26",
    role: "guardian",
    phone: "12345678",
    avatar: "",
  },
  {
    _id: new ObjectID("5aa1c2c35ef7a4e97b5e995b"),
    name: "Bruna Silva",
    email: "user@user.com",
    password: "$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26",
    phone: "12345678",
    role: "adopter",
  },
];
