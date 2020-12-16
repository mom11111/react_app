const express = require('express');

const mongoose = require('mongoose');

const product = require('../models/product');

const router = express.Router();

router.post('/addproducts', (req,res)=>{
    //console.log(req.body);
    const{title, description, link} = req.body;

    const newProd = new product({
        title,
        description,
        link
    });
    newProd.save().then(prod=>{
        console.log(prod);
        res.status(200).send({message:"saved successfully"});
    }).catch(err=>{
        console.log(err);
    })
})

router.get('/products', (req,res)=>{
    product.find({}).limit(20).then(products=>{
        console.log(products);
        res.status(200).send(products);
    }).catch(err=>{
        console.log(err);
    })
})

module.exports=router;