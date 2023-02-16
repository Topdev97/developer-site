import { getAuth } from "firebase-admin/auth";
import { Request, Response } from "express";
async function firebaseCheckAuth(req, res, next) {
  if (req.authorization) {
    try {
      const user = getAuth().verifyIdToken(req.authorization);
      next(user);
    } catch (error) {
      throw new Error(err);
    }
  } else {
    next (new Error("invalid token"));
  }
}

export { firebaseCheckAuth  };
