// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Database } from "../../../db/db";
Database;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({ lenght, data: allEntries }))
  // res.status(200).json({ name: "hello" });
  try {
    const db = new Database();
    const services = await db.getAll("services");
    res.status(200).json(services);
  } catch (error) {
    res.json({
      message: "Hubo un error",
    });
    console.log(error);
  }
}