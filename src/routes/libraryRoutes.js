const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

router.get('/', libraryController.getAllBooks);
router.get('/:id', libraryController.getBookById);
router.post('/', libraryController.createBook);
router.put('/:id', libraryController.updateBook);
router.delete('/:id', libraryController.deleteBook);

module.exports = router;