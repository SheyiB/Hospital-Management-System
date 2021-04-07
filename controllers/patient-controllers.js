const patientModel = require('../models/patient-model');
const mongoose = require('mongoose');

//Patient Functions//
//Get all Patients
const allPatient = (req,res)=>{
    //res.end('This route handles Patient Get Requests');
    const getAllPatients = patientModel.find();
    getAllPatients
    .then(patients=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : patients
    });
        })
    .catch(err=>{
        res.json({
            "error" : err.message,
            "success" : false,
            "data" : null
        });
    });
};
//single patient registration
function registerPatient(req,res){
    //res.end('This route handles the registration of a patient');
    if(req.body == null){
        res.json({
            "success": false,
            "data": null,
            "error": "No data Supplied",
        }); 
    }
    else{
        const newPatient = patientModel.create(req.body);

        newPatient
        .then((patient)=>{
            res.json({
                "success": true,
                "data": patient,
                "error": null,
            });
        })
        .catch(err=>{
            res.json({
                "success": false,
                "data": null,
                "error": err.message,
            });
        });    
    }
    
}
//get a specific Patient
const specificPatient = (req,res)=>{
    //res.end(`This route gets patient with card number ${req.params.Phone}`);
        output = {};
    const onePatient = patientModel.findOne({Phone: req.params.Phone}, (err,patient)=>{
        if(err)
        res.json({
            "error" : err.message,
            "success" : false,
            "data" : null,
        });
        else if(patient){
            res.json({
                "error": null,
                "success" : true,
                "data" : patient,
            });
        }
    });
    }

//update a specific patient's record
const updatePatient = (req,res)=>{
    //res.end(`This route updates the record of patient with card number ${req.params.Phone}`);
    const updatePatient = patientModel.findOneAndUpdate({Phone: req.params.Phone}, req.body, {new: true});
    updatePatient
    .then(patients=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : patients
    });
        })
    .catch(err=>{
        res.json({
            "error": err.message,
            "data": null,
            "success": false,
        });
    });

}
//delete a specific patient's record
const deletePatient = (req,res)=>{
    //res.end(`This route delete the record of patient with card number ${req.params.Phone}`)
    const removePatient = patientModel.findOneAndRemove({Phone: req.params.Phone});
    removePatient
    .then(patients=>{
        res.send({
            "error" : null,
            "success" : true,
            "data" : patients
    });
        })
    .catch(err=>{
        res.send({
            "error" : err.message,
            "success" : false,
            "data" : null
        });
    });
};
//end of Patient Functions//

module.exports = {
    allPatient,
    registerPatient,
    specificPatient,
    updatePatient,
    deletePatient,
};