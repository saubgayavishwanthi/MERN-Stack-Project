const { get, response } = require("./app");
const User = require("./model");



    //const getUsers =(cb) =>{
      //  cb(users);
    //};


   // const getUserById = (id,cb) =>{
     //   const user= users.find(user=>user.id == id);
      //  cb(user);
   // };

   const getUsers =(req,res,next) =>{
    User.find()
    .then(reponse =>{
        res.json({response})
    })
    .catch(error =>{

        res.json({message:error})

    })
   };

   const addUser =(req,res,next) =>{
    const user =new User ({
        id: req.body.id,
        name: req.body.id,
    });
  
   user.save()
   .then(reponse =>{
    res.json({response})
})
.catch(error =>{

    res.json({message:error})

})

};

const updateUser =(req,res,next) =>{
    const {id,name} = req.body;
    User.updateOne({id:id},{$set: {name:name}})
        .then(reponse =>{
            res.json({response})
        })
        .catch(error =>{
    
            res.json({message:error})

        })
    
         
}

const deleteUser =(req,res,next) =>{
    const id =req.body.id;
    User.deleteOne({id:id})
    .then(reponse =>{
        res.json({response})
    })
    .catch(error =>{

        res.json((error))

    });
   
}

    exports.getUsers =getUsers;
    exports.addUser = addUser;
    exports.updateUser = updateUser;
    exports.deleteUser = deleteUser;