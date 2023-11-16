const fs = require("fs");

function writeAndRead(path, obj) {
  fs.writeFile(path, JSON.stringify(obj), (err) => {
    if (err) {
      throw err;
    }
    console.log("Archivo creado");
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  });
}

writeAndRead("fichero.json", { calle: "Teruel", numero: 9 });

module.exports = writeAndRead;
