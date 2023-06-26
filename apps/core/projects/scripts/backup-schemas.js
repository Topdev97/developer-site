
const { exec } = require('child_process');
const {config} = require('../src/config')

// specify the connection details as a connection string
const connectionString = config.dbUrl

// create a timestamp for the backup file name
const timestamp = new Date().toISOString().slice(0, 19).replace(/[-T:]/g, '');

// specify the backup file name and location
const backupFilename = `backup_${timestamp}.sql`;
const backupPath = `./backups/schemas/${backupFilename}`;

// construct the pg_dump command
const pgdumpCmd = `pg_dump --schema-only ${connectionString} > ${backupPath}`;

// execute the pg_dump command
exec(pgdumpCmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error backing up database: ${error}`);
  } else {
    console.log(`Database backup created: ${backupPath}`);
  }
});