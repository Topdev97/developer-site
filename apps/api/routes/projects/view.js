import express from 'express'

export const view = express.Router()

view.get('/')
view.get('/:id')