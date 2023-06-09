const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article.cotnroller')

router.get('/getArticle', articleController.getAll);
router.get('/get/single/article/:id', articleController.getOne);

router.post('/createArticle', articleController.create)
router.put('/update/single/article/:id', articleController.updateById)
router.delete('/delete/single/article/:id', articleController.updateById)


module.exports = router;