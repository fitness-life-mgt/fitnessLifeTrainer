const express =require('express');
const router = express.Router();
const db=require("../config/connection");






router.get("/",(req,res)=>{

    let sql= `SELECT (SELECT COUNT(*) FROM appointment WHERE type =1) count_1, (SELECT COUNT(*) FROM dietplan WHERE type = 1) count_2 FROM dual;`;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
   });
});

module.exports=router;   