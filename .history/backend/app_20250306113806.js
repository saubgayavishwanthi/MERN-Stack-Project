const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors()); //remove policies

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json); //use for data convert

app.get('/users',(req,res)=>{
controller.getUsers(rq,res,next =>{
   res.send();
});
});

app.post('/user',(req,res) =>{
    controller.addUser(id,user =>{
        res.send(user);
    });
});

module.exports = app;