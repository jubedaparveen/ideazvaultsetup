const express = require('express');

// initialise Routers for Admin-panel-routers, website-Routers 
const adminPanelRouters = express.Router();
const websiteRouters = express.Router();

const AboutRouter = require('./adminpanelrouter/aboutpagerouter');
const AuthorDetailsRouter = require('./adminpanelrouter/authordetailsrouter');


adminPanelRouters.use('/about', AboutRouter)
adminPanelRouters.use('/authordetailpage', AuthorDetailsRouter)


//export all adminPanelRouters, websiteRouters
module.exports = {
     adminPanelRouters,
     websiteRouters,
 }