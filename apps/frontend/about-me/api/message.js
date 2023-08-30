
import {connectToDatabase,Message} from "./lib/mongodb.js"
export default async function handler(request, response) {
  if(request.method =="POST"){

    const {body} = request
    await connectToDatabase()
    const message = new Message(body)
    const dbResponse = await message.save()
    console.log(dbResponse)
  
    // return response.json(dbResponse);
    return response.status(200).json(body)
  } else {
    response.status(400).json({
      message:"Bad request"
    })
  }
}