const Tag = require('../models/tags.model');

const postTag = async(req, res, next)=>{
    try{
        const {name} = req.body;
        const tag = new Tag({name})
       const tagInserted = await tag.save()
    
       return res.status(201).json(tagInserted) 
    }catch(error){
        return next(error);
    }
    
}

const getTags = async (req, res, next) =>{
    try{
      const tags = await Tag.find();
      return res.status(200).json(tags)

    }catch(error){
        return next(error)
    }
}

const deletedTag = async (req, res, next)=>{
    try{

        const {id} =req.params;
        const tagDeleted = await Tag.findByIdAndDelete(id)
        return res.status(200).json(tagDeleted)

    }catch(error){
        return next(error)
    }
}

const putTag = async (req, res, next) => {
    try{

        const {id} = req.params
        const tagUpdate = new Tag(req.body)
        tagUpdate._id = id;
        const tagUpdatedBd = await Tag.findByIdAndUpdate(id, tagUpdate)
        return res.status(200).json(tagUpdatedBd)


    }catch(error){
        return next(error)
    }
}

module.exports = {
    postTag,
    getTags,
    deletedTag,
    putTag
}