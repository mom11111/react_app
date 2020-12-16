const express = require('express');

const bodyparser = require('body-parser');

const mongoose = require('mongoose');

const cors = require('cors');

const path = require('path');

const prod = require('./routes/product');

const app = express();



app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://sunny:<your password>@cluster0.krw6g.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (err,res)=>{
    if(err)
      console.log(err);
    else
       console.log('connected to the db');
})

app.use(cors());

app.use(prod);

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(process.env.PORT||4000, '0.0.0.0');
