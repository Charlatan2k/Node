const fs = require("fs").promises;

function writeAndRead(path, obj) {
  fs.writeFile(path, JSON.stringify(obj))
    .then((data) => {
      return fs.readFile(path, "utf-8");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// writeAndRead(
//   "fichero.json",
//   (persona = {
//     name: "Pepe",
//     age: 25,
//     surname: "Perez",
//   })
// );

module.exports = writeAndRead;
