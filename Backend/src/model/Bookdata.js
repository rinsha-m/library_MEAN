const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lib',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
});
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    
    book : String,
    author : String,
    genre : String,
    description : String,
    imageUrl : String
});

var Bookdata = mongoose.model('book', BookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;



    