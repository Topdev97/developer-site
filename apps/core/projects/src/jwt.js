const jose = require("jose");
const { config } = require("./config.js");
const secret = new TextEncoder().encode(config.jwtSecret);

const alg = "HS256";

function signJWT(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      // solo poner en el token el id, para compartir la menor cantidad posible de informacion sobre nuestros usuarios
      const jwt = await new jose.SignJWT({ id: userId })
        .setProtectedHeader({ alg })
        .setIssuedAt() // Meta data, cuando se creo
        .setExpirationTime(Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60)
        .sign(secret);
      resolve(jwt);
    } catch (error) {
      reject(error);
    }
  });
}

async function decodeToken(token) {
  const cleanToken = token.replace("Bearer ", "");

  try {
    const verified = await jose.jwtVerify(cleanToken, secret);
    return verified;
  } catch (error) {
    throw new Error("Token invalido");
  }
}

module.exports = { signJWT, decodeToken };
