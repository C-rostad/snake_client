let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') { //check if ctrl c is pressed, exit if so
    process.exit();
  } else { //do something with key press
    if (key === "w") {
      connection.write("Move: up");
      //setInterval(() =>  connection.write("Move: up"), 100);
    }
    if (key === "a") {
      connection.write("Move: left");
      //setInterval(() =>  connection.write("Move: left"), 100);
    }
    if (key === "s") {
      connection.write("Move: down");
      //setInterval(() =>  connection.write("Move: down"), 100);
    }
    if (key === "d") {
      connection.write("Move: right");
      //setInterval(() =>  connection.write("Move: right"), 100);
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