const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;






router.post("/",(req,res)=>{
    
    const telephone=req.body.telephone;
    const password=req.body.password;
    const cpassword=req.body.cpassword;
    


  // Simple validation

    if( !telephone||!password||!cpassword){
        return res.status(400).json({msg:"Please enter all fields"});

    }

    if(password!==cpassword){
      return res.status(400).json({msg:"Please Confim your password"});
    }





        let sql=`UPDATE trainer SET telephone = ?, password = ?  WHERE trainerId = '1' `;
 bcrypt.hash(password,saltRounds,(err,hash)=>{  

    if(err){
       console.log(err)
    }

  
    
    db.query(sql,[telephone,hash],(err,result)=>{
        console.log(err);
    });
   

})
    
    res.json("SUCCESS");
});





module.exports=router;