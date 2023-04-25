const { exec } = require('child_process');
const { config } = require('../src/config');

// specify the connection details as a connection string
const connectionString = config.dbUrl;

// specify the name of the backup file to restore
const backupFilename = './backups/backup_20230425132040.sql';

// construct the pg_restore command
const pgRestoreCmd = `psql ${connectionString} < ${backupFilename}`;

// execute the pg_restore command
exec(pgRestoreCmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error restoring database: ${error}`);
  } else {
    console.log(`Database restore completed successfully.`);
  }
});