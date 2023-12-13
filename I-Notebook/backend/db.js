const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://new-user-123:Neomatrix334@cluster0.qjd5vef.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
