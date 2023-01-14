import express from "express";
import cors from 'cors'
import { projects } from "./routes/index.js";
import {errorHandler} from './middlewares/error.handler.js'

export const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api/v1/projects',projects)
app.use(errorHandler)