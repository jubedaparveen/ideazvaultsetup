const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
     thumbnail : String,
     titles : String,
     description: String,
     ourvision:String,
     ourvalues:String,
     created_at : Date,
     update_at : {
          type:Date,
          default:Date.now
     }
});

AboutSchema.pre('save', function(){
     this.created_at = new Date();
});

AboutSchema.pre('updateOne', function(){
     this.created_at = new Date();
});

// collection name in database
const AboutModel = mongoose.model('AboutDetails', AboutSchema);

module.exports = AboutModel;