 const Manga = require('../models/mangas.model')

 const postMangas = async(req, res, next) =>{
     try{
        const manga = new Manga(req.body)
        const mangaInserted = await manga.save()
        return res.status(201).json(mangaInserted)

    }catch(error){
         return next(error);
     }

 }


 const getMangas = async (req, res, next) =>{
     try{
        const mangas = await Manga.find().populate('tag').populate('user');
         return res.status(200).json(mangas)

     }catch(error){
         return next(error)
     }
 }

 const getMangasByUser = async (req, res, next) => {
     try{
         constIdLogeado = req.user._id
         console.log(userIdLogeado)
         const mangasMongo = await Manga.find({user:userIdLogeado}).populate('tag')
         return res.status(200).json(mangasMongo)
        
     }catch(error){
         return next(error)
     }
 }

 const deleteManga = async (req, res, next) =>{
     try{
         const {id} = req.params
         const deletedManga = await Manga.findByIdAndDelete(id)
         return res.status(200).json(deletedProduct)
     }catch(error){
         return next(error)
     }
 }



 module.exports = {
    postMangas,
     getMangas,
     deleteManga,
     getMangasByUser 
 }