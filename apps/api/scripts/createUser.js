import readline from "readline";
import Model from '../db/mongo/models/user.model.js'


import { hashPassword } from "../bcrypt.js";
import { config } from "../config.js";
import { dbConnect } from "../db/mongo/index.js";
console.log(config.MONGODB_URI);

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
      const connection = await dbConnect()
      const newUser = new Model({
        email:user,
        password:hashedPassword
      })
      const response = await newUser.save()
      console.log(response)
      console.log(`${user} Agregado exitosamente`);
      connection.disconnect()
      rl.close()
      
    } catch (error) {
      console.error(error);
    }

  });
});
