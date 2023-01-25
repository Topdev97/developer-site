import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { Project } from "../../../models/project.model";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {

    const slug =  req.query.slug
    const client = await clientPromise;
    const db = client.db("test");
    const project = await db.collection('projects').findOne({slug:slug}) as any
    project.description = project.description.replaceAll("\\n","\n")
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
