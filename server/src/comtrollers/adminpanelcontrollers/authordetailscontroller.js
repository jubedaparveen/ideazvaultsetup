const express = require('express');
const authorDetailModel = require('../../models/authorDetailsModel');


const addAuthorDetailsController = async (req, res) =>{
     try{
          const data = req.body;
          console.log(data);

          if(req.files){
               if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
          }
          const datasave = new authorDetailModel(data);
          const response = await datasave.save();
          // console.log(response);
          res.status(200).json({message: 'Author Details Sucessfully Added', data: response});
     }
     catch(error){
          console.log(error);
          res.status(500).json({message: 'Internal Server error'})
     }
};

const viewAuthoeDetailsController = async (req, res) =>{
    try{
     const data =  await authorDetailModel.find();
     const filepath = `${req.protocol}://${req.get('host')}/author-details/`;
     res.status(200).json({message: 'Author Details Secussfully Viewed in Author Page', data, filepath})
    }
    catch(error){
     console.log(error);
     res.status(500).json({message: 'Internal Server Errror'})
    }
};

const singleAuthorDeleteController = async (req, res) =>{
     try{
          //console.log('deleting Data',req.body)
          // console.log('delete',req.params)
          // const { id } = ;
          const data = await authorDetailModel.deleteOne(req.params);
          // console.log('Deleting Id', id);
          res.status(200).json({message: 'Data Deleting Sucessfully', data})
     }
     catch(error){
          console.log(error)
          res.status(500).json({meassage: ' Internal Server Error'})
     }


};

module.exports = {
     addAuthorDetailsController,
     viewAuthoeDetailsController,
     singleAuthorDeleteController
}