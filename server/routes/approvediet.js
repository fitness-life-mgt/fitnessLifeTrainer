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
    const suppliment=req.body.suppliment;
    
        let sql=`UPDATE dietplan SET bmeal=?, lmeal=?, dmeal=?, exmeal=? , suppliment=? WHERE email = 'lakmali@gmail.com' `;

    db.query(sql,[bmeal, lmeal,dmeal,exmeal , suppliment],(err,result)=>{
        console.log(err);
    });
    
    res.json("SUCCESS");
});


module.exports=router;