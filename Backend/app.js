const express = require('express');
const Bookdata = require('./src/model/Bookdata');
 const Authordata = require('./src/model/Authordata');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
username='admin@library';
password='12345';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

  app.post('/login', (req, res) => {
    let userData = req.body
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
app.post('/addbook',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {       
        book : req.body.book.book,
        author : req.body.book.author,
        genre : req.body.book.genre,
        description : req.body.book.description,
        imageUrl : req.body.book.imageUrl,
   }       
   var book = new Bookdata(book);
   book.save();
});
app.get('/products',function(req,res){
    
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    Bookdata.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})

    app.delete('/remove/:id',(req,res)=>{
   
      id = req.params.id;
      Bookdata.findByIdAndDelete({"_id":id})
      .then(()=>{
          console.log('success')
          res.send();
      })
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      book =req.body.book,
      author =req.body.author,
      genre = req.body.genre,
      description =req.body.description,
      imageUrl = req.body.imageUrl
     Bookdata.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "book":book,
                                  "author":author,
                                  "genre":genre,
                                  "description":description,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
   

   app.post('/addauthor',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var author = {       
        authorname : req.body.author.authorname,
        description : req.body.author.description,
        imageUrl : req.body.author.imageUrl,
   }       
   var author = new Authordata(author);
   author.save();
});
app.get('/authors',function(req,res){
    Authordata.find()
                .then(function(authors){
                    res.send(authors);
                });
});
app.get('/author/:id',  (req, res) => {
  
  const id = req.params.id;
  Authordata.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
})

    app.delete('/removeauthor/:id',(req,res)=>{
   
      id = req.params.id;
      Authordata.findByIdAndDelete({"_id":id})
      .then(()=>{
          console.log('success')
          res.send();
      })
    })

    app.put('/updateauthor',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      authorname =req.body.authorname,
      description =req.body.product.description,
      imageUrl = req.body.imageUrl
      Authordata.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "authorname":authorname,
                                  "description":description,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })

     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

