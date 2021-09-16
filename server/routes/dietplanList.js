const express =require('express');
const router = express.Router();
const db=require("../config/connection");






router.get("/",(req,res)=>{

    let sql= `SELECT member.firstName AS fname,member.lastName AS lname, dietplan.description AS des  FROM member JOIN dietplan ON dietplan.email = member.email WHERE dietplan.type =0 AND member.subscribed=1`;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
   });
});

module.exports=router;