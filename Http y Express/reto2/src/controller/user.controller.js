let usuario = null;

function getStart(request, response) {
  let respuesta = { error: true, codigo: 200, mensaje: "Punto de Inicio" };
  response.send(respuesta);
}
