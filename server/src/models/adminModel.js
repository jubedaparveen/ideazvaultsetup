const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
     email : String,
     password : String,
     created_at : Date,
     updated_at : {
          type : Date,
          default : Date.now
     }
});



const adminLoginModel = mongoose.model('adminlogindetails', adminLoginSchema);

module.exports = adminLoginModel;