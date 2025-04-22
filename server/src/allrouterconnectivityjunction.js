const express = require('express');
const { adminPanelRouters, websiteRouters } = require('./routers/routerjunction');


const allRouters = express.Router();

allRouters.use('/admin-panel', adminPanelRouters);
allRouters.use('/website', websiteRouters);


module.exports = allRouters;
