const nurseModel = require('../models/nurse-model');
const mongoose = require('mongoose');

//nurse Functions//
//Get all nurses
const allnurse = (req,res)=>{
    //res.end('This route handles nurse Get Requests');
    const getAllnurses = nurseModel.find();
    getAllnurses
    .then(nurses=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : nurses
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
//single nurse registration
function registernurse(req,res){
    //res.end('This route handles the registration of a nurse');
    if(req.body == null){
        res.json({
            "success": false,
            "data": null,
            "error": "No data Supplied",
        }); 
    }
    else{
        const newnurse = nurseModel.create(req.body);

        newnurse
        .then((nurse)=>{
            res.json({
                "success": true,
                "data": nurse,
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
//get a specific nurse
const specificnurse = (req,res)=>{
    //res.end(`This route gets nurse with card number ${req.params.Phone}`);
        output = {};
    const onenurse = nurseModel.findOne({Phone: req.params.Phone}, (err,nurse)=>{
        if(err)
        res.json({
            "error" : err.message,
            "success" : false,
            "data" : null,
        });
        else if(nurse){
            res.json({
                "error": null,
                "success" : true,
                "data" : nurse,
            });
        }
    });
    }

//update a specific nurse's record
const updatenurse = (req,res)=>{
    //res.end(`This route updates the record of nurse with card number ${req.params.Phone}`);
    const updatenurse = nurseModel.findOneAndUpdate({Phone: req.params.Phone}, req.body, {new: true});
    updatenurse
    .then(nurses=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : nurses
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
//delete a specific nurse's record
const deletenurse = (req,res)=>{
    //res.end(`This route delete the record of nurse with card number ${req.params.Phone}`)
    const removenurse = nurseModel.findOneAndRemove({Phone: req.params.Phone});
    removenurse
    .then(nurses=>{
        res.send({
            "error" : null,
            "success" : true,
            "data" : nurses
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
//end of nurse Functions//

module.exports = {
    allnurse,
    registernurse,
    specificnurse,
    updatenurse,
    deletenurse,
};