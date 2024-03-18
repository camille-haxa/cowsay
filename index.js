const user = require("./information");

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `Hello, i'm ${user.name} from ${user.campus} campus!`,
    e: "oO",
    T: "U ",
  })
);
