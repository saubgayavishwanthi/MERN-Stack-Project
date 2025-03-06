const express = require('express');
const app = express();
const cors = require('cors');
const port =3001;
const host = '127.0.0.1';
const mongoose =require("mongoose")


app.use(cors()); //remove policies
app.use(express.json);

const uri= ''

const server =app.listen(port,host,() =>{
    console.log(`server is listening to ${server.address().port}`);

});