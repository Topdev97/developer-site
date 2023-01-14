import { request, response} from "express";
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export const authenticate = async (request, response, next) => {
  if (request.headers.authorization) {
    try {
      const user = getAuth().verifyIdToken(req.headers.authorization);
      request.user = user;
      next();
    } catch (error) {
      response.status(401).json({
        message: "Token invalido",
      });
    }
  } else {
    throw new Error('Token invalido')
  }
};

initializeApp({
  credential: applicationDefault(),
});
