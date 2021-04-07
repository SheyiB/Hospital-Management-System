const express = require("express");
const app = express();
const patients = require("./routes/patient-routes");
const doctors = require("./routes/doctors-routes");
const drugs = require("./routes/drugs-routes");
const nurses = require("./routes/nurses-routes");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3501;

mongoose.connect('mongodb://localhost/hospitalProject',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err)=>{
    if(err){
        console.log('Database could not connect');
    }
    else{
        console.log(`Database Connected`);
    }
});

app.listen(PORT, ()=>{
    console.log(`Server has started on port ${PORT}`);
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.end('Still building');
    // console.log('yo');
});

app.use('/patients',patients);
app.use('/drugs',drugs);
app.use('/doctors',doctors);
app.use('/nurses', nurses);