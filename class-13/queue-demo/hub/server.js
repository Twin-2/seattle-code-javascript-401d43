'use strict';

const io = require('socket.io')(3000);
const uuid = require('uuid').v4;

// this queue is representational of a "keyed" queue
const queue = {
  chores: {}
}

// queue model:
// queue = {
//   chores: {
//     '123456': 'clean your room',
//     '345566': 'do dishes'
//   }
// }

const family = io.of('/family');

family.on('connection', socket => {
  console.log(socket.id);

  socket.on('new-chore', payload => {
    let id = uuid();
    queue.chores[id] = payload;
    socket.emit('added')
    family.emit('chore', { id, payload })
  })

  socket.on('get-all', () => {
    Object.keys(queue.chores).forEach(id => {
      socket.emit('chore', { id, payload: queue.chores[id] })
    })
  })

  socket.on('completed', payload => {
    // delete is a native method to delete
    // a property on an object
    delete queue.chores[payload.id];
  })
})