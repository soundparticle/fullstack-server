const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/util/connect');

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/disco-dogs');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    // eslint-disable-next-line
    console.log('Server Running On', server.address().port);
});