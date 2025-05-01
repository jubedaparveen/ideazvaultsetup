const { response } = require("express");
const adminLoginModel = require("../../models/aboutmodel")


const registerAdminController = async () =>{
     try{
          const adminData = await adminLoginModel.find();
          console.log('Admin Dtails ....',adminData);

          if(adminData.length !== 0) return console.log('Admin is already registered', adminData[0].email);

          const newAdmin = new adminLoginModel({
               email : process.env.ADMIN_EMAIL,
               password : process.env.ADMIN_PASSWORD,
          });
          const response = await newAdmin.save();
          
          console.log('Admin is registered Sucessfully', response);
     }
     catch(error){
          console.log(error);
     }
};

module.exports = {
     registerAdminController
};