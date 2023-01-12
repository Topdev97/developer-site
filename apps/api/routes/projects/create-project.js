import express, { request, response } from 'express'

export const createProject = express.Router()

createProject.post('/',(request,response)=>{
    response.json({
        message:"pasaste el middleware"
    })
})
