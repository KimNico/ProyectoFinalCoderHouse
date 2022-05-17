require('dotenv/config')
let mongoose = require("mongoose")


mongoose.connect(process.env.CONNECTION_STRING,{
    userNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Nos conectamos a MongoDb')
})
.catch((error)=>{
    console.log(error);
})

export {mongoose}