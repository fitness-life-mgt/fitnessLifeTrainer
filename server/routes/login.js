const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');

const  saltRounds=10;



// login

router.post("/",(req,res)=>{

  
  console.log("Inside Router!");
    const email =req.body.email;
    const password =req.body.password;

    //validation
    if (!email || !password) {
      console.log('Feilds Empty');
        return res.json({ msg: "Please enter all fields" });
      }

      
    //sql for user
    let sqlCheckEmail=`SELECT *FROM trainer WHERE email=?`;

   
    //check for existing user
    db.query(sqlCheckEmail,email,(err,user)=>{
        if(user.length<1){
          console.log('No User');
            return res.status(400).json({msg:"user does not exists"});
        }else{
            let currentUser = user[0];

            // Validate password
            bcrypt.compare(password, user[0].password).then(isMatch => {
              if (!isMatch){
                console.log('Wrong credentials');
                return res.status(400).json({ msg: "Invalid credentials" });
              }else{
                console.log('Success');
                res.json("SUCCESS");
              }
              const test={
                  username:"rashan",
                  id:1
              }
              jwt.sign({user:user},"mysecretkey",(err,token)=>{
                          res.json({token:token})
              })


            });


        }
        
    });
});

module.exports=router;