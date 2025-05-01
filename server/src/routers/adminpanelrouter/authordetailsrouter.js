const express = require('express');
const multer = require('multer');
const multerupload = require('../../middleware/multer');
const AuthorDetailsRouter = express.Router();

const { 
     addAuthorDetailsController, 
     viewAuthoeDetailsController,
     singleAuthorDeleteController
} = require('../../comtrollers/controllersjunction');

AuthorDetailsRouter.post('/authordetail', multerupload, addAuthorDetailsController);
AuthorDetailsRouter.get('/viewauthoedetail', viewAuthoeDetailsController);
AuthorDetailsRouter.delete('/deleteauthordetail/:_id', singleAuthorDeleteController)



module.exports = AuthorDetailsRouter;