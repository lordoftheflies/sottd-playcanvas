/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.socket = io.connect('http://localhost:3000/');

this.socket.emit ('playerJoined', 'John');
