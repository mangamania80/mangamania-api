const mongoose = require('mongoose');

 const mangaSchema = new mongoose.Schema({ 
    title:{type: String, require:true},
    year:{type: Number}, 
     description:{type:String, require:true},
     image:{type:String, require:true},
    tag:{type: mongoose.Types.ObjectId, ref:'tags'},
    user: {type:mongoose.Types.ObjectId, ref:'users'}
     },
    {
         timestamps:true
     })


    const Mangas = mongoose.model('mangas', mangaSchema)

     module.exports = Mangas;

    