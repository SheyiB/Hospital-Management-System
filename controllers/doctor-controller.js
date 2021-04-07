const doctorModel = require('../models/doctor-model');
const mongoose = require('mongoose');

//doctor Functions//
//Get all doctors
const alldoctor = (req,res)=>{
    //res.end('This route handles doctor Get Requests');
    const getAlldoctors = doctorModel.find();
    getAlldoctors
    .then(doctors=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : doctors
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
//single doctor registration
function registerdoctor(req,res){
    //res.end('This route handles the registration of a doctor');
    if(req.body == null){
        res.json({
            "success": false,
            "data": null,
            "error": "No data Supplied",
        }); 
    }
    else{
        const newdoctor = doctorModel.create(req.body);

        newdoctor
        .then((doctor)=>{
            res.json({
                "success": true,
                "data": doctor,
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
//get a specific doctor
const specificdoctor = (req,res)=>{
    //res.end(`This route gets doctor with card number ${req.params.Phone}`);
        output = {};
    const onedoctor = doctorModel.findOne({Phone: req.params.Phone}, (err,doctor)=>{
        if(err)
        res.json({
            "error" : err.message,
            "success" : false,
            "data" : null,
        });
        else if(doctor){
            res.json({
                "error": null,
                "success" : true,
                "data" : doctor,
            });
        }
    });
    }

//update a specific doctor's record
const updatedoctor = (req,res)=>{
    //res.end(`This route updates the record of doctor with card number ${req.params.Phone}`);
    const updatedoctor = doctorModel.findOneAndUpdate({Phone: req.params.Phone}, req.body, {new: true});
    updatedoctor
    .then(doctors=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : doctors
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
//delete a specific doctor's record
const deletedoctor = (req,res)=>{
    //res.end(`This route delete the record of doctor with card number ${req.params.Phone}`)
    const removedoctor = doctorModel.findOneAndRemove({Phone: req.params.Phone});
    removedoctor
    .then(doctors=>{
        res.send({
            "error" : null,
            "success" : true,
            "data" : doctors
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
//end of doctor Functions//

module.exports = {
    alldoctor,
    registerdoctor,
    specificdoctor,
    updatedoctor,
    deletedoctor,
};