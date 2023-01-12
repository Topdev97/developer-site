import express from 'express'
import { createProject } from './create-project.js'
import { deleteProject } from './delete.js'
import { updateProject } from './update.js'
import { view } from './view.js'
import { authenticate } from '../../middlewares/auth.js'


export const projects = express.Router()

projects.use('/',view)
projects.use('/',authenticate,createProject)
projects.use('/',authenticate,updateProject)
projects.use('/',authenticate,deleteProject)