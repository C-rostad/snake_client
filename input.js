let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') { //check if ctrl c is pressed, exit if so
    process.exit();
  } else { //do something with key press
    switch(key) {
      case "w": connection.write("Move: up");
      break;
      case "a": connection.write("Move: left");
      break;
      case "s": connection.write("Move: down");
      break;
      case "d": connection.write("Move: right");
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