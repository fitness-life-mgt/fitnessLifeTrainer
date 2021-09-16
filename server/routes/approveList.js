const express =require('express');
const router = express.Router();
const db=require("../config/connection");






router.get("/",(req,res)=>{

    let sql= `SELECT member.firstName AS fname,member.lastName AS lname, appointment.date AS adate ,appointment.time AS atime , appointment.zoom AS azoom FROM member JOIN appointment ON appointment.email = member.email WHERE appointment.type =1 `;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
   });
});

module.exports=router;