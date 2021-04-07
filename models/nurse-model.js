const mongoose = require('mongoose');

const nurseSchemas = mongoose.Schema({
    LastName:{
        type: String,
        required: [true,"nurse's Last name is required"],
    },

    FirstName:{
        type: String,
        required: [true,"nurse's first name is required"],
    },

    Email:{
        type: String,
        unique: [true,'Email has been used '],
    },

    Phone:{
        type: Number,
        required: [true,"nurse's phone number is required"],
       
    }


});

module.exports = mongoose.model('nurse',nurseSchemas);

//It can be done like this
//const nurse = mongoose.model('nurse',nurseSchemas);
//module.exports= nurse;