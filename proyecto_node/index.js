const writeAndRead = require("./writeAndRead");
const readConsole = require("./readConsole");

readConsole((persona) => writeAndRead("fichero.json", persona));
