const net = require('net');
let clientList = [];
const server = net.createServer((client) => {
  console.log('client connected');
  clientList[clientList.length + 1] = client;

  client.on('end', () => {
    clientList = clientList.filter(clientFromList => client !== clientFromList);
    console.log('client disconnected');

  });
  client.on('data', (data) => {
    clientList.map(clientFromList => {
        if (client !== clientFromList){
            clientFromList.write(data.toString());
        }
    });
  });
  client.write('welcome\r\n');
});

server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
}); 


// To run this: run 'npm start'
// then connect in separate terminals with 'nc localhost 8124'
// Docs here: https://nodejs.org/api/net.html#event-connection