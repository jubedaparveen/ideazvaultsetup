const express = require('express');

const allRouters = require('./src/allrouterconnectivityjunction');


//import .env file 
require('dotenv').config();

//connect database file
require('./src/db/config')

// server is define here
const server = express();
server.use(express.json());

// cross platform connection with (npm i cors) 
const cors = require('cors');
server.use(cors());

//Router link with allRouterConnectivityJunction
server.use('/allapi', allRouters);

server.use('/about-page', express.static('./src/uploadimages'));
server.use('/author-details', express.static('./src/uploadimages'));

// create server with .env file
server.listen(process.env.PORT, ()=>{
     console.log(`Server is running on port ${process.env.PORT}`);
})