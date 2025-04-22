const express = require('express');
const multer = require('multer');
const multerupload = require('../../middleware/multer');
const AboutPageRouter = express.Router();

// ====================== Admin Penal ==========================================
// ====================== aboutpage ============================================
const { 
     addAboutPageController, 
     viewAboutPageController, 
     singleDeleteController } = require('../../comtrollers/controllersjunction');
AboutPageRouter.post('/addaboutpage', multerupload, addAboutPageController);
AboutPageRouter.get('/viewaboutpage', viewAboutPageController)
AboutPageRouter.delete('/delete/:id', singleDeleteController)

// ====================== about page ===========================================


module.exports = AboutPageRouter;