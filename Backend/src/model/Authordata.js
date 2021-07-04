const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lib',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
});
const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    
    authorname : String,
    description : String,
    imageUrl : String
});

var Authordata = mongoose.model('author', AuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;



    