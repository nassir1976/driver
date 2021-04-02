const io = require('socket.io-client');

const host = 'http://localhost:3000';

const socket = io.connect(host);
const caps = io.connect(`${host}/caps`);

socket.on('pickup', payload => {
  setTimeout(()=>{
    console.log('orderID',payload.payload.orderID,'picked up')
    //  payload.event = 'intransit'
 socket.emit('intransit',payload)
  },1500)
});

socket.on('pickup', payload => {
  setTimeout(()=>{
    console.log('orderID',payload.payload.orderID,'delivered');
    // payload.event = 'delivered'
    
    
    socket.emit('delivered', payload);
  },3000)
});