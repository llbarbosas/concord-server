const socket = require('socket.io-client')('http://localhost:3030/helloworld', { query: '&token=123&foo=bar' })