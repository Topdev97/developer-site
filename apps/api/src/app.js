const express = require('express');
const cors = require('cors');
const { projects, image, auth,label,file } = require('./routes/index.js');
const { errorHandler } = require('./middlewares/error.handler.js');
const { checkAuth } = require('./middlewares/auth.jwt.js');


const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/v1/projects',projects)

app.use('/v1/labels',label)

app.use('/v1/images',checkAuth,image)
app.use('/v1/auth',auth)

app.use('/v1/file',checkAuth,file)
app.use(errorHandler)


module.exports = {
    app
}