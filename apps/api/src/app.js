import express from "express";
import cors from 'cors'
import { projects ,users,auth} from "./routes/index.js";
import {errorHandler} from './middlewares/error.handler.js'
import { checkAuth } from "./middlewares/auth.jwt.js";

export const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api/v1/projects',projects)
app.use('/api/v1/users',checkAuth ,users)
app.use('/api/v1/auth',auth)
app.use(errorHandler)