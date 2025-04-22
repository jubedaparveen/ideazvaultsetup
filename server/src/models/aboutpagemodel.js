const mongoose = require('mongoose');

const AboutPageSchema = new mongoose.Schema({
     thumbnail : String,
     description: String,
     ourvision:String,
     ourvalues:String,
     created_at : Date,
     update_at : {
          type:Date,
          default:Date.now
     }
});

AboutPageSchema.pre('save', function(){
     this.created_at = new Date();
});

AboutPageSchema.pre('updateOne', function(){
     this.created_at = new Date();
});

// collection name in database
const AboutPageModel = mongoose.model('AboutPageDetails', AboutPageSchema);

module.exports = AboutPageModel;