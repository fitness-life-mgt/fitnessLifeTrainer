const express =require('express');
const router = express.Router();
const db=require("../config/connection");






router.get("/",(req,res)=>{

    let sql= `SELECT * FROM member `;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
   });
});

module.exports=router;   