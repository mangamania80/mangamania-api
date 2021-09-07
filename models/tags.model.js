const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({ 
    name:{type: String, require:true},
    
    },
    {
        timestamps:true
    }
    )
    const Tag = mongoose.model('tags', tagsSchema)
    module.exports = Tag