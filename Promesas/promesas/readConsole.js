const readline = require("readline");
const fsPromises = require("fs/promises");

function pregunta(pregunta) {
  const question = new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(pregunta, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
  return question;
}

function readConsole(callback) {
  let persona = {};

  pregunta("Introduce tu nombre: ")
    .then((name) => {
      persona.name = name;
      return pregunta("Introduce tu apellido: ");
    })
    .then((apellido) => {
      persona.surname = apellido;
      return pregunta("Introduce tu edad: ");
    })
    .then((edad) => {
      persona.age = edad;
      return callback(persona);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = readConsole;
