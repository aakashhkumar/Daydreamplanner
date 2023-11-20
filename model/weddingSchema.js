const mongoose = require("mongoose");
const weddingSchema = new mongoose.Schema({
    "name": {type:String,required:true},
    "price": {type:Number,required:true}
},{
    collection: "design_themes"
})

module.exports = mongoose.model("weddingSchema",weddingSchema);
