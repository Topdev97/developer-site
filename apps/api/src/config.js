const env = process.env.NODE_ENV ?? "development";
const envs = {
  development: ".env",
  stage: ".env.stage",
  production: ".env.production",
};

const options = {};
if (envs[env]) {
  options.path = envs[env];
}

require("dotenv").config(options);

const config = {
  env,
  dbUrl: process.env.DATABASE_URL,
  port: process.env.PORT ?? 3000,
  jwtSecret: process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_SECRET,
  cloudinaryUrl: process.env.CLOUDINARY_URL,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
};

console.log("[project-config]:", config);
module.exports = {
  config,
};
