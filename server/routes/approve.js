const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
//const bcrypt=require('bcrypt');
const  saltRounds=10;

router.post("/",(req,res)=>{
    
    const date=req.body.date;
    const time=req.body.time;
    const zoom=req.body.zoom;
    
        let sql=`INSERT INTO appointment (date, time, zoom, type, email, trainerId) values(?,?,?,'1','lakmali@gmail.com','1')`;
        
    db.query(sql,[date ,time, zoom ],(err,result)=>{
        console.log(err);
    });
    
    res.json("SUCCESS");
});

module.exports=router;