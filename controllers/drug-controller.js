const drugModel = require('../models/drug-model');
const mongoose = require('mongoose');

//drug Functions//
//Get all drugs
const alldrug = (req,res)=>{
    //res.end('This route handles drug Get Requests');
    const getAlldrugs = drugModel.find();
    getAlldrugs
    .then(drugs=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : drugs
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
//single drug registration
function registerdrug(req,res){
    //res.end('This route handles the registration of a drug');
    if(req.body == null){
        res.json({
            "success": false,
            "data": null,
            "error": "No data Supplied",
        }); 
    }
    else{
        const newdrug = drugModel.create(req.body);

        newdrug
        .then((drug)=>{
            res.json({
                "success": true,
                "data": drug,
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
//get a specific drug
const specificdrug = (req,res)=>{
    //res.end(`This route gets drug with card number ${req.params.Phone}`);
        output = {};
    const onedrug = drugModel.findOne({Phone: req.params.Phone}, (err,drug)=>{
        if(err)
        res.json({
            "error" : err.message,
            "success" : false,
            "data" : null,
        });
        else if(drug){
            res.json({
                "error": null,
                "success" : true,
                "data" : drug,
            });
        }
    });
    }

//update a specific drug's record
const updatedrug = (req,res)=>{
    //res.end(`This route updates the record of drug with card number ${req.params.Phone}`);
    const updatedrug = drugModel.findOneAndUpdate({Phone: req.params.Phone}, req.body, {new: true});
    updatedrug
    .then(drugs=>{
        res.json({
            "error" : null,
            "success" : true,
            "data" : drugs
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
//delete a specific drug's record
const deletedrug = (req,res)=>{
    //res.end(`This route delete the record of drug with card number ${req.params.Phone}`)
    const removedrug = drugModel.findOneAndRemove({Phone: req.params.Phone});
    removedrug
    .then(drugs=>{
        res.send({
            "error" : null,
            "success" : true,
            "data" : drugs
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
//end of drug Functions//

module.exports = {
    alldrug,
    registerdrug,
    specificdrug,
    updatedrug,
    deletedrug,
};