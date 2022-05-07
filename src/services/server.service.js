const express = require('express');
const app = express();
const cors=require('cors');
const apiRouter = require('../routes');
require("dotenv").config();


//======================================================================================================================
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);
//======================================================================================================================


//======================================================================================================================
exports.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("BACKEND is running 🔥 at port : "+process.env.PORT);
    });
}
//=======================================================================================================================