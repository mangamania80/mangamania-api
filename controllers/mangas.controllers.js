const Manga = require('../models/mangas.model')

const postManga = async(req, res, next) =>{
    try{
        const {title} = req.body;
        const manga = new Manga({title})
        const mangaInserted = await manga.save()

        return res.status(201).json(mangaInserted)

    }catch(error){
        return next(error);
    }

}

const postManga = async(req, res, next) =>{
    try{
        const {year} = req.body;
        const manga = new Manga({year})
        const mangaInserted = await manga.save()

        return res.status(201).json(mangaInserted)

    }catch(error){
        return next(error);
    }

}

const postManga = async(req, res, next) =>{
    try{
        const {description} = req.body;
        const manga = new Manga({description})
        const mangaInserted = await manga.save()

        return res.status(201).json(mangaInserted)

    }catch(error){
        return next(error);
    }

}

const postManga = async(req, res, next) =>{
    try{
        const {image} = req.body;
        const manga = new Manga({image})
        const mangaInserted = await manga.save()

        return res.status(201).json(mangaInserted)

    }catch(error){
        return next(error);
    }

}

const postManga = async(req, res, next) =>{
    try{
        const {tags} = req.body;
        const manga = new Manga({tags})
        const mangaInserted = await manga.save()

        return res.status(201).json(mangaInserted)

    }catch(error){
        return next(error);   
    }

}

const getMangas = async (req, res, next) =>{
    try{
        const mangas = await Manga.find();
        return res.status(200).json(mangas)

    }catch(error){
        return next(error)
    }
}




module.exports = {
    postManga,
    getMangas
}