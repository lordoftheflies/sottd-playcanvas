/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var server = require('http').createServer();
var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
});

console.log('Server started.');
server.listen(3000);