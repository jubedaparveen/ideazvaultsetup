const express = require('express');
const multer = require('multer');
const multerupload = require('../../middleware/multer');
const AboutRouter = express.Router();


// ====================== Admin Penal ==========================================
// ====================== About Page ==========================================
const { 
     addAboutController,
     viewAboutController,
     DeleteController,
     readEditAboutController, 
} = require('../../comtrollers/controllersjunction');


AboutRouter.post('/addabout', multerupload, addAboutController);
AboutRouter.get('/viewabout', viewAboutController)
AboutRouter.delete('/delete/:_id',  DeleteController)
AboutRouter.get('/readeditAbout/:_id', readEditAboutController)




module.exports = AboutRouter;