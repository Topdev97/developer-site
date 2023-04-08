
const bcrypt = require('bcrypt');
const { Client } = require('pg');
const readline = require('readline');
const {config} = require('../src/config')
const client = new Client({
  connectionString: config.dbUrl,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



async function createUser(email, password, role) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = {
    text: 'INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING id, email, role',
    values: [email, hashedPassword, role],
  };
  try {
    await client.connect();
    const result = await client.query(query);
    console.log('New user created:');
    console.log(result.rows[0]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
function promptUser() {
    rl.question('Enter email: ', (email) => {
      rl.question('Enter password: ', (password) => {
        rl.question('Enter role: ', (role) => {
          createUser(email, password, role);
          client.end()
          rl.close();
        });
      });
    });
  }

promptUser();