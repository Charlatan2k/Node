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
  });
});

//Segunda persona json

let persona2 = {};

rl.question("Introduce tu nombre: ", (answer) => {
  persona2.name = answer;

  rl.question("Introduce tu apellido: ", (answer) => {
    persona2.surname = answer;

    rl.question("Introduce tu edad: ", (answer) => {
      persona2.age = answer;

      fs.writeFile("persona2.json", JSON.stringify(persona2), (err) => {
        if (err) {
          throw err;
        }
        console.log("Archivo actualizado");
        fs.readFile("persona2.json", "utf8", (err, data) => {
          if (err) {
            throw err;
          }
          console.log(data);
        });
        rl.close();
      });
    });
  });
});
