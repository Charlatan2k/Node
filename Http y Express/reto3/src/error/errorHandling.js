function errorHandling(err, req, res, next) {
  res.status(500).send("Algo salio mal");
}

module.exports = errorHandling;
