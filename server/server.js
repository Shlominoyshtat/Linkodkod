import express from 'express';
import router from './router.js';
import cors from 'cors';

const server =  express();

server.use(express.json())

server.use(cors())

server.use('/static',express.static('public'))

server.use('/',router);

server.listen(3000,() =>{
    console.log('server is listening on port 3000....')
})