const prompt = require("prompt-sync")();
// Requiring fs module in which 
// writeFile function is defined. 
const fs = require('fs') 
var shippo = require("shippo")(
  "shippo_live_c43a0822c210a70c0aaf2f71a0e7055d39db1784"
);

const name = prompt("What is your name?");
console.log(`Hey there ${name}`);

const street = prompt(
  "What is your street address? Please only type in street address, we'll ask about state and zip later: "
);

const city = prompt("What is your city? ");
const state = prompt("What is your state? ");
const zip = prompt("What is your zip? ");

shippo.address.create(
  {
    name: name,
    street1: street,
    city: city,
    state: state,
    zip: zip,
    country: "US",
    email: "shippotle@goshippo.com",
    validate: true,
  },
  function (err, address) {
    console.log(address);
    // asynchronously called
  }
);

