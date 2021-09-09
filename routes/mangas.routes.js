const express = require('express')
const router = express.Router()
const{postMangas, getMangas, deleteManga, getMangasByUser} = require('../controllers/mangas.controllers')

router.post('/new', postMangas)
router.get('/', getMangas)
router.get('/user', getMangasByUser)
router.delete('/delte/:id', deleteManga)

module.exports=router;