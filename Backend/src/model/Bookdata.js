const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://username1:user1@myfiles.d1yi4.mongodb.net/LIb?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false 
});
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    
    book : String,
    author : String,
    genre : String,
    description : String,
    imageUrl : String
});

var Bookdata = mongoose.model('book', BookSchema);                        
module.exports = Bookdata;



    