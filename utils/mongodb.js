const mongoose= require("mongoose");

const dotenv= require("dotenv");

dotenv.config()

const mongodb= process.env.mongodbURL

const connect= async ()=>{
    try{
         const db= await mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true })
         const {name,host}= db.connection
         console.log(`Conectado a la base de datos ${name}, ${host}`)
    }catch(error){
        console.log("Error con la conexion base de datos")
    }
}
module.exports={connect}