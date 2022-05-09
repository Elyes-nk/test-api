const mongoose = require('./src/services/mongoose.service');
const express = require('express');
const app = express();
const cors=require('cors');
const apiRouter = require('./src/routes');
require("dotenv").config();


//======================================================================================================================
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);
//======================================================================================================================


//======================================================================================================================
app.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("BACKEND is running 🔥 at port : " + process.env.PORT);
    });
}
//=======================================================================================================================

mongoose.dbConnect();
app.start();

module.exports = app
