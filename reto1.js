const fs = require("fs");
const readline = require("readline");

let persona = {
  name: "Juan",
  surname: "Alberto",
  age: 24,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.writeFile("persona.json", JSON.stringify(persona), (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo creado");

  fs.readFile("persona.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    rl.question("Introduce tu nombre: ", (answer) => {
      console.log(`Hello, ${answer}!`);
      persona.name = answer;

      rl.question("Introduce tu apellido: ", (answer) => {
        console.log(`Hello, ${answer}!`);
        persona.surname = answer;

        rl.question("Introduce tu edad: ", (answer) => {
          console.log(`Hello, ${answer}!`);
          persona.age = answer;

          fs.writeFile("persona.json", JSON.stringify(persona), (err) => {
            if (err) {
              throw err;
            }
            console.log("Archivo actualizado");
            rl.close();

            fs.readFile("persona.json", "utf8", (err, data) => {
              if (err) {
                throw err;
              }
              console.log(data);
            });
          });
        });
      });
    });
  });
});
