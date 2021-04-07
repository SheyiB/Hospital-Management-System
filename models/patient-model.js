const mongoose = require('mongoose');

const patientSchemas = mongoose.Schema({
    LastName:{
        type: String,
        required: [true,"Patient's Last name is required"],
    },

    FirstName:{
        type: String,
        required: [true,"Patient's first name is required"],
    },

    Email:{
        type: String,
        unique: [true,'Email has been used '],
    },

    Phone:{
        type: Number,
        required: [true,"Patient's phone number is required"],
       
    }


});

module.exports = mongoose.model('patient',patientSchemas);

//It can be done like this
//const patient = mongoose.model('patient',patientSchemas);
//module.exports= patient;