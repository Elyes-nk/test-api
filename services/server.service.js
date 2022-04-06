const express = require('express');
const app = express();
const cors=require('cors');
const apiRouter = require('../routes');
const multer = require("multer");

require("dotenv").config();


//======================================================================================================================
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);
app.use('/img', express.static("img"));
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


//============ storage img using multer ==================
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"img");
    },filename:(req,file,cb) => {
        cb(null,req.body.name);
    }, 
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("file uploaded");
})
//========================================================