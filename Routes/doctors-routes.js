const express = require("express");
const app = express.Router();
const {registerdoctor,alldoctor,specificdoctor,updatedoctor,deletedoctor} = require('../controllers/doctor-controller');



//doctor Routes//
//single doctor registration
//app.post("/", registerdoctor);
//Get all doctors 
//app.get("/",alldoctor);
//get a specific doctor

app.route('/')
.post(registerdoctor)
.get(alldoctor);

app.route(':/Phone')
.get(specificdoctor)
.put(updatedoctor)
.delete(deletedoctor);

// app.get("/:cardNo",specificdoctor);
// //update a specific doctor's record
// app.put("/:cardNo",updatedoctor);
// //delete a specific doctor's record
// app.delete("/:cardNo",deletedoctor);
// //end of doctors routes//

module.exports = app;