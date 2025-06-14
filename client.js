const net = require("net");
const {
  IP,
  PORT,
  ENCODING,
} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  conn.on("connect", () => {
    console.log("Connected - Welcome to Snake!");
    conn.write("Name: CPR");


  });
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;



// Note

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
