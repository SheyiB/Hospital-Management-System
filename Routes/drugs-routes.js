const express = require("express");
const app = express.Router();
const {registerdrug,alldrug,specificdrug,updatedrug,deletedrug} = require('../controllers/drug-controller');



//drug Routes//
//single drug registration
//app.post("/", registerdrug);
//Get all drugs 
//app.get("/",alldrug);
//get a specific drug

app.route('/')
.post(registerdrug)
.get(alldrug);

app.route('/:cardNo')
.get(specificdrug)
.put(updatedrug)
.delete(deletedrug);

//app.get("/:cardNo",specificdrug);
//update a specific drug's record
//app.put("/:cardNo",updatedrug);
//delete a specific drug's record
//app.delete("/:cardNo",deletedrug);
//end of drugs routes//

module.exports = app;