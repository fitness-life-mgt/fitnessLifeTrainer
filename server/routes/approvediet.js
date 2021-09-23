const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

router.post("/",(req,res)=>{
    
    const bmeal=req.body.bmeal;
    const lmeal=req.body.lmeal;
    const dmeal=req.body.dmeal;
    const exmeal=req.body.exmeal;
    const supplement=req.body.supplement;
    
      // let sql=`INSERT INTO dietplan ( bmeal, lmeal,dmeal,exmeal, supplement, email) values(?,?,?,?,?, 'lakmali@gmail.com') `;
        let sql=`UPDATE dietplan SET bmeal = ?, lmeal = ?, dmeal = ?, exmeal = ?, supplement = ?, type='1' WHERE email = 'cmwick@gmail.com' `;
        
    db.query(sql,[bmeal, lmeal,dmeal,exmeal , supplement],(err,result)=>{
        console.log(err);
    });
    
    res.json("SUCCESS");
});


module.exports=router;