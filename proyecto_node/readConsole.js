const readline = require("readline");

function readConsole(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let persona = {};

  rl.question("Introduce tu nombre: ", (answer) => {
    persona.name = answer;

    rl.question("Introduce tu apellido: ", (answer) => {
      persona.surname = answer;

      rl.question("Introduce tu edad: ", (answer) => {
        persona.age = answer;

        rl.close();
      });
    });
  });

  rl.on("close", () => {
    return callback(persona);
  });
}

// readConsole(console.log);

module.exports = readConsole;
