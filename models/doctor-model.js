const mongoose = require('mongoose');

const doctorSchemas = mongoose.Schema({
    LastName:{
        type: String,
        required: [true,"doctor's Last name is required"],
    },

    FirstName:{
        type: String,
        required: [true,"doctor's first name is required"],
    },

    Email:{
        type: String,
        unique: [true,'Email has been used '],
    },

    Phone:{
        type: Number,
        required: [true,"doctor's phone number is required"],
       
    }


});

module.exports = mongoose.model('doctor',doctorSchemas);

//It can be done like this
//const doctor = mongoose.model('doctor',doctorSchemas);
//module.exports= doctor;