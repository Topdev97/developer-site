// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({ lenght, data: allEntries }))
  // res.status(200).json({ name: "hello" });
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const movies = await db
        .collection("projects")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    res.json(movies);
    
  } catch (error) {
    res.json({
      message: "Hubo un error",
    });
    console.log(error);
  }
}
