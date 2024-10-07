const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://suyogp123456789:Suyog%401503@cluster0.vmc56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connectionDb = mongoose.connection

connectionDb.on('error',(error)=>{
    console.log(error);
})

connectionDb.on('connected',()=>{
    console.log("Connected to Database successfully.")
})

module.exports = connectionDb