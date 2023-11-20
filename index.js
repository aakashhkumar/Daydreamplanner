

const express = require("express");
const mongoose = require("mongoose");
const weddingRoute = require("./controller/weddingRoute");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

mongoose.set("strictQuery",true); //Deprection Warning //To supress warning
mongoose.connect("mongodb+srv://admin:admin@cluster0.vvfs4ia.mongodb.net/weddingdb")
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/weddingRoute",weddingRoute);
app.listen(4000,()=>{
    console.log("Server Started at 4000");
})