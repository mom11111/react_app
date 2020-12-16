const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    }
})

const product = mongoose.model('product', productSchema);

module.exports = product;