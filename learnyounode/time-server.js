const net = require('net');

const server = net.createServer(socket => {
  const now = new Date();
  const year = now.getFullYear();             
  const month = zeroFill(now.getMonth() + 1);  //This is a function that's being used to ensure that the month is displayed as a two-digit number
  const day = zeroFill(now.getDate());
  const hours = zeroFill(now.getHours());
  const minutes = zeroFill(now.getMinutes());
  
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.write(formattedDate);
  socket.end();
});

function zeroFill(number) {
  return (number < 10 ? '0' : '') + number;
}

const port = process.argv[2];
server.listen(port);
