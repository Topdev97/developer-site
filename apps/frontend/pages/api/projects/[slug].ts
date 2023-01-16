import type { NextApiRequest, NextApiResponse } from "next";
import { Database } from "../../../db/db";
type Data = {
  name: string;
};

const db = new Database()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {

    const slug =  req.query.slug
    
    const project = await db.getById('projects', slug as string)
    if(!project){
      throw new Error('hubo un error')
    }  
    res.status(200).json(project)
  
  } catch (e) {
    console.error(e)
    
    res.status(404).json({
      "name":"error"
    })
  }
}
