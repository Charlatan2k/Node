// Reto 3

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

async function askQuestions() {
  try {
    let persona2 = {};

    const name = await pregunta("Introduce tu nombre: ");
    persona2.name = name;

    const surname = await pregunta("Introduce tu apellido: ");
    persona2.surname = surname;

    const age = await pregunta("Introduce tu edad: ");
    persona2.age = age;

    await fs.writeFile("persona2.json", JSON.stringify(persona2), (err) => {
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
    });
  } catch (error) {
    console.log(error);
  }
}

askQuestions();

// function askQuestions() {
//   let persona2 = {};

//   pregunta("Introduce tu nombre: ")
//     .then((name) => {
//       persona2.name = name;
//       return pregunta("Introduce tu apellido: ");
//     })
//     .then((surname) => {
//       persona2.surname = surname;
//       return pregunta("Introduce tu edad: ");
//     })
//     .then((age) => {
//       persona2.age = age;
//       return new Promise((resolve, reject) => {
//         fs.writeFile("persona2.json", JSON.stringify(persona2), (err) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve();
//           }
//         });
//       });
//     })
//     .then(() => {
//       return new Promise((resolve, reject) => {
//         fs.readFile("persona2.json", "utf8", (err, data) => {
//           if (err) {
//             reject(err);
//           } else {
//             console.log("Archivo actualizado");
//             console.log(data);
//             resolve();
//           }
//         });
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
