import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
// var cors = require('cors');
import cors from "cors";

var app = express();

app.use(cors());

app.use(express.json());
app.use("/api/blogs",blogRouter);



mongoose.connect('mongodb+srv://Chanchal2002:root@cluster0.iq9xepl.mongodb.net/blogDatabase?retryWrites=true&w=majority').
then(()=>app.listen(8080)).then(()=>console.log("connected to database")).catch((err)=>console.log(err));