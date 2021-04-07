const mongoose = require('mongoose');

const drugSchemas = mongoose.Schema({
    LastName:{
        type: String,
        required: [true,"drug's Last name is required"],
    },

    FirstName:{
        type: String,
        required: [true,"drug's first name is required"],
    },

    Email:{
        type: String,
        unique: [true,'Email has been used '],
    },

    Phone:{
        type: Number,
        required: [true,"drug's phone number is required"],
       
    }


});

module.exports = mongoose.model('drug',drugSchemas);

//It can be done like this
//const drug = mongoose.model('drug',drugSchemas);
//module.exports= drug;