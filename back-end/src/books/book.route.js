const express = require('express');
const Book = require('./book.model');
const router = express.Router();
const { postABook, getAllBooks, getASingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

//post a book
router.post('/create-book', verifyAdminToken, postABook);

//fetch all books
router.get('/', getAllBooks);

//fetch a single book
router.get('/:id', getASingleBook);

//update a book
router.put('/edit/:id',verifyAdminToken, updateBook);

//delete a book
router.delete('/:id',verifyAdminToken, deleteBook);


module.exports = router;