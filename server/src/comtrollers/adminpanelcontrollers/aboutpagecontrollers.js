const { response } = require('express');
const AboutPageDetails = require('../../models/aboutpagemodel');


const addAboutPageController = async (req, res) =>{
     try{
          const data = req.body;
          if(req.files){
               if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
          }
          console.log(data);
          const datasave = new AboutPageDetails(data);
          const response = await datasave.save();
          console.log(response)
          res.status(200).json({message: 'Sucessfully added Content in About Page', data: response});
     }
     catch{
          console.log(error);
          res.status(500).json({message: 'Internal Server Error'});
     }
};

const viewAboutPageController = async (req, res) =>{
     try{
          const data = await AboutPageDetails.find()
          const filepath = `${req.protocol}://${req.get('host')}/about-page/`;
          res.status(200).json({message: 'Sucessfully Veiw About Page Data', data, filepath})
     }
     catch{
          console.log(error);
          res.status(500).json({message: 'Internal Server Error'});
     }
};

const singleDeleteController = async (req, res) => {
     try{ 
          console.log(req.body)
          const data = await AboutPageDetails.deleteOne(req.params);
         console.log(req.params)
         res.status(200).json({message : 'Sucessfully Delete Data', data})
         console.log(data)
     }
     catch(error){
         console.log(error);
         res.status(500).json({message : 'internal server error'})
     }
 };

module.exports = {
     addAboutPageController,
     viewAboutPageController,
     singleDeleteController
}