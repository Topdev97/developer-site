const { exec } = require('child_process');
const { config } = require('../src/config');
const readline = require('readline')
// specify the connection details as a connection string
const connectionString = config.dbUrl;


const rl = readline.createInterface(process.stdin,process.stdout)

function prompt() {
  rl.question('selleciona la ruta del archivo de backup: ',(backupFilename)=>{
    const pgRestoreCmd = `psql ${connectionString} < ${backupFilename}`;

    exec(pgRestoreCmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error restoring database: ${error}`);
      } else {
        console.log(`Database restore completed successfully.`);
      }
      rl.close()
    });
  })  
}

prompt()