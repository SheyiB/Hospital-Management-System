const express = require("express");
const app = express.Router();
const {registernurse,allnurse,specificnurse,updatenurse,deletenurse} = require('../controllers/nurses-controller');



//nurse Routes//
//single nurse registration
//app.post("/", registernurse);

app.route('/')
.post(registernurse)
.get(allnurse);

//Get all nurses 
//app.get("/",allnurse);
//get a specific nurse

app.route('/:cardNo')
.get(specificnurse)
.put(updatenurse)
.delete(deletenurse);

//app.get("/:cardNo",specificnurse);
//update a specific nurse's record
//app.put("/:cardNo",updatenurse);
//delete a specific nurse's record
//app.delete("/:cardNo",deletenurse);
//end of nurses routes//

module.exports = app;