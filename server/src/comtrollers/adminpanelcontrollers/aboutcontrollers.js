const { response } = require('express');
const AboutModel = require('../../models/aboutmodel');


const addAboutController = async (req, res) =>{
     try{
          const data = req.body;
          if(req.files){
               if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
          }
          // console.log(data);
          const datasave = new AboutModel(data);
          const response = await datasave.save();
          // console.log(response)
          res.status(200).json({message: 'Sucessfully added Content in About Page', data: response});
     }
     catch(error){
          console.log(error);
          res.status(500).json({message: 'Internal Server Error'});
     }
};

const viewAboutController = async (req, res) =>{
     try{
          const data = await AboutModel.find()
          const filepath = `${req.protocol}://${req.get('host')}/about-page/`;
          res.status(200).json({message: 'Sucessfully Veiw About Page Data', data, filepath})
     }
     catch(error){
          console.log(error);
          res.status(500).json({message: 'Internal Server Error'});
     }
};

const DeleteController = async (req, res) =>{
     try{ 
          // const { id } = req.params;
          //console.log('Deleteing ID:', id)
          const data = await AboutModel.deleteOne(req.params);
          
          // if(data.deletedCount === 0){
          //      return res.status(404).json({message: 'No document found to delete'});
          // }

          res.status(200).json({message : 'Sucessfully Delete Data', data});

          // console.log(data);
     }
     catch(error){
         console.log(error);
         res.status(500).json({message : 'internal server error'});
     }
 };

 const readEditAboutController = async (req, res) =>{
     try{
          const data = await AboutModel.findOne(req.params)
          const filepath = `${req.protocol}://${req.get('host')}/about-page/`
          res.status(200).json({message: 'Edit About Data Sucessfully', data, filepath})
     }
     catch(error){
          console.log(error);
          res.status(500).json({message: 'Internal Server Error'})
     }
 };
module.exports = {
     addAboutController,
     viewAboutController,
     DeleteController,
     readEditAboutController,
}