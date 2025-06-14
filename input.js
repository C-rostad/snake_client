const handleUserInput = function(key) {
  if (key === '\u0003') { //check if ctrl c is pressed, exit if so
    process.exit();
  } else { //do something with key press
    console.log(key);
  }
}


// set up keyboard inputs for game
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  stdin.on("data", handleUserInput); 
  return stdin;
};


module.exports = setupInput;