const { read } = require("fs");
const fs = require("fs/promises");
const readline = require("readline");

let persona = {
  name: "Juan",
  apellido: "Perez",
  age: 25,
};

// fs.writeFile("persona.json", JSON.stringify(persona))
//   .then(() => {
//     return fs.readFile("persona.json", "utf-8");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// readAndWrite();
