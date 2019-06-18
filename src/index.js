const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect("mongodb+srv://admin:123mudei@cluster0-gty5u.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
app.use((req,res, next)=>{
    req.io = io;
    next();
})
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "upload", "resized")))
app.use(require("./routes.js"))


server.listen(3334, ()=>{
    console.log("Server running at port 3334")
})