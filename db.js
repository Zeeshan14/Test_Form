const mongoose = require("mongoose");
var mongoURL = "mongodb+srv://admin:passion@cluster0.w1b7n.mongodb.net/mern-rooms";
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});

var connection = mongoose.connection;

connection.on('error',()=>{
    console.log('Failed!')
});

connection.on('connected',()=>{
    console.log('connected!')
});

module.exports = mongoose;