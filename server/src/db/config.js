const mongoose = require('mongoose');
const { registerAdminController } = require('../comtrollers/controllersjunction');

// connectivity between application and mongoose Database
const mongooseurl = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CODE}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`


mongoose.connect(mongooseurl)
.then(()=>{
     registerAdminController();
     console.log('Database is connected... ');
})
.catch((error)=>{
     console.log('connection Error', error);
});