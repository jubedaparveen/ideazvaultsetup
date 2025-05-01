const mongoose = require('mongoose');
const { updateOne } = require('./aboutmodel');

const authorDetailSchema = new mongoose.Schema({
     thumbnail : String,
     authorname : String,
     authoraddress : String,
     authoremail : String,
     authormedialink: String,
     authornumber : String,
     created_at : Date,
     update_at :{
          type : Date,
          default : Date.now,
     }
});

authorDetailSchema.pre('save', function(){
     this.created_at = new Date();
});

authorDetailSchema.pre('updateOne', function(){
     this.created_at = new Date();
});

const authorDetailModel = mongoose.model('AuthorDetails', authorDetailSchema);

module.exports = authorDetailModel;