const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://username1:user1@myfiles.d1yi4.mongodb.net/LIb?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false 
});
const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    
    authorname : String,
    description : String,
    imageUrl : String
});

var Authordata = mongoose.model('author', AuthorSchema);                        

module.exports = Authordata;



    