const express = require('express');

// initialise Routers for Admin-panel-routers, website-Routers 
const adminPanelRouters = express.Router();
const websiteRouters = express.Router();

const AboutPageRouter = require('./adminpanelrouter/aboutpagerouter');


adminPanelRouters.use('/aboutpage', AboutPageRouter)


//export all adminPanelRouters, websiteRouters
module.exports = {
     adminPanelRouters,
     websiteRouters,
 }