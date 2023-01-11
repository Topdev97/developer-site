import type { NextApiRequest, NextApiResponse } from "next";
import { Database } from "../../../db/db";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {

    const db = new Database()
    const id =  Number(req.query.id) - 1
    const service = await db.getById('services', id.toString() as string)
    if(!service){
      throw new Error('hubo un error')
    }  
    res.status(200).json(service)
  
  } catch (e) {
    console.error(e)
    
    res.status(404).end()
  }
}
