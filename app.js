const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./Rotas/rotas');

const  PORT = process.env.PORT || 8081;
const app = express();

mongoose.connect(
    process.env.MONGO_URI || "mongodb://0.0.0.0:27017/CRUD", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then( () => {
        console.log("Connected to MongoDB");
        
    }).catch(function(erro){
        console.log(erro);
    }); 



app.use(express.json());

app.use("/api/blog", blogRouter)

app.listen(PORT, () => {
    console.log('Server is running on port :' + PORT);
})