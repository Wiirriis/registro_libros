const {Router} = require('express');
const router = Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

module.exports = router;