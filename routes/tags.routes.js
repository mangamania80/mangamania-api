const express = require('express')
const router = express.Router()
const{postTag, getTags, deletedTag, putTag} = require('../controllers/tags.controllers')

router.post('/', postTag)
router.get('/', getTags)
router.delete('/:id', deletedTag)
router.put('/:id', putTag)

module.exports= router;