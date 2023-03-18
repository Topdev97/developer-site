const readline = require("readline")
const { models } = require('../db/sequelize');
const { hashPassword } =  require("../bcrypt.js")

let user;
let password;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What is the email? ",async (answer) => {
  user = answer;
  rl.question("What is the password? ", async (answer) => {
    password = answer;
    console.log(user, password);
    const hashedPassword = hashPassword(password);
    try {
      const newUser = await models.User.create({
        email:user,
        password:hashedPassword
      })
      const response = await newUser.save()
      console.log(response)
      console.log(`${user} Agregado exitosamente`);
      
      rl.close()
      
    } catch (error) {
      console.error(error);
    }

  });
});
