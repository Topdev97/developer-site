function errorHandler(err, req, res, next) {
  res.status(500).json({
    error:true,
    message: err.message,
    stack: err.stack,
  });
}

module.exports =  { errorHandler };
