import express from 'express';
import router from './router.js';

const server =  express();

server.use('/static',express.static('public'))

server.use('/',router);

server.listen(3000,() =>{
    console.log('server is listenung on port 3000....')
})