'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const server = io.connect('http://localhost:3000/caps');

const store = '1-800-coolness';

server.emit('join-room', store);

server.on('delivered', payload => {
  console.log('_DELIVERED_:', payload);
})

setInterval(() => {
  let pckg = {
    store: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
  }

  server.emit('pickup', pckg);
}, 1000)