let connection;
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY
} = require("./constants");

const handleUserInput = function(key) {
  if (key === '\u0003') { //check if ctrl c is pressed, exit if so
    process.exit();
  } else {
    switch(key) {
      case MOVE_UP_KEY: connection.write("Move: up");
      break;
      case MOVE_LEFT_KEY: connection.write("Move: left");
      break;
      case MOVE_DOWN_KEY: connection.write("Move: down");
      break;
      case MOVE_RIGHT_KEY: connection.write("Move: right");
      break;
      case "1": connection.write("Say: Hello friends!");
      break;
      case "2": connection.write("Say: Good Luck!");
      break;
      case "3": connection.write("Say: Good Game");
      break;
    }
  }
};


// set up keyboard inputs for game
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = setupInput;