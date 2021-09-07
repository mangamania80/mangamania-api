const express = require('express')
const router = express.Router()
const{postManga, getMangas} = require('../controllers/mangas.')

router.post('/', postManga)
router.get('/', getMangas)

module.exports=router;