const express = require("express");
const app = express();
const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");
app.use('/api/rooms' , roomsRoute);
const port = process.env.port || 5000;
app.get("/",(req,res)=> res.send("Abe loru"));
app.listen(port, () => console.log("lora mera"));