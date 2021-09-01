const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;






router.post("/",(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const password=req.body.password;
    const cpassword=req.body.cpassword;

    
  // query for users
 
  let sqlCheckEmail = `SELECT * FROM owners WHERE email = ?`;

  // Simple validation

    if(!fname||!lname||!email||!password||!cpassword){
        return res.status(400).json({msg:"Please enter all fields"});

    }

    if(password!==cpassword){
      return res.status(400).json({msg:"Please Confim your password"});
    }


//check for existing user

db.query(sqlCheckEmail,email,(err,user)=>{
    if(user.length>0){
         return res.status(400).json({msg:"this user already"});
    }else{
        let sql=`insert into user(fname,lname,email,password) values(?,?,?)`;
 bcrypt.hash(password,saltRounds,(err,hash)=>{  

    if(err){
       console.log(err)
    }

  
    
    db.query(sql,[name,email,hash],(err,result)=>{
        console.log(err);
    });
   

})
    }
    res.json("SUCCESS");
});


});


module.exports=router;