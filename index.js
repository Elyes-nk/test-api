const app = require("./src/services/server.service");
const mongoose = require('./src/services/mongoose.service');

mongoose.dbConnect();
app.start();

