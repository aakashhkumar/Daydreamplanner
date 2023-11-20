const express = require("express");
const weddingSchema = require("../model/weddingSchema");
const weddingRoute = express.Router();
const mongoose = require("mongoose");


weddingRoute.post("/create-design_themes",(req,res)=>{
    weddingSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})


weddingRoute.get("/",(req,res)=>{
    weddingSchema.find((err,data)=>{
        if(err)
            return err
        else 
            res.json(data);
    })
})

weddingRoute.route("/update-design_themes/:id")
.get((req,res)=>{
    weddingSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })


}).put((req,res)=>{
    weddingSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })

})

weddingRoute.delete("/delete-design_themes/:id",(req,res)=>{
    weddingSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


module.exports = weddingRoute;