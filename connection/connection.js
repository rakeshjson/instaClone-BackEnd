const mongoose = require('mongoose')
mongoose.set(`strictQuery`, true)
async function getConnection() {
    const uri = `mongodb+srv://rakeshjson:rakesh123456@cluster0.5nulz9g.mongodb.net/test`
    await mongoose.connect(uri, (err)=>{
        console.log( err ? "Connection to mongoDB failed" : "Connected to MongoDB successfully" ) 
    })
}
module.exports = getConnection