const express = require("express");
const app = express.Router();
const {registerPatient,allPatient,specificPatient,updatePatient, deletePatient} = require('../controllers/patient-controllers')


//Patient Routes//
//single patient registration

app.route('/')
.post(registerPatient)
.get(allPatient);

app.route(':/Phone')
.get(specificPatient)
.put(updatePatient)
.delete(deletePatient);

// app.post("/", registerPatient);
// //Get all patients 
// app.get("/",allPatient);
// //get a specific patient
// app.get("/:Phone",specificPatient);
// //update a specific patient's record
// app.put("/:Phone",updatePatient);
// //delete a specific patient's record
// app.delete("/:Phone",deletePatient);
//end of patients routes//

module.exports = app;