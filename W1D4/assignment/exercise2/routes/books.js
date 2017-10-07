const express = require('express');
const router = express.Router();
const Book = require('../model/book');

let books = [
    new Book(1, 'book1', 'author1', 100),
    new Book(2, 'book2', 'author2', 200),
    new Book(3, 'book3', 'author3', 300)
];

router.get('/', (req, res, next) => {
    // Get all
    res.end(`Books: ${JSON.stringify(books)}`);
}).get('/:id', (req, res, next) => {
    // Get by ID
    const id = req.params.id;
    const book = books.find(book => book.id == id);
    res.end(`Book: ${JSON.stringify(book)}`);
}).post('/', (req, res, next) => {
    const newbook = new Book(req.body.id, req.body.title, req.body.author, req.body.numOfPages);
    const book = books.find(book => book.id == newbook.id);
    if (book) {
        res.end('The book with this ID is existed');
    } else {
        books.push(newbook);
        res.end(`Posted: ${JSON.stringify(newbook)}`);
    }
}).put('/', (req, res, next) => {
    // Update by book ID
    const updateBook = new Book(req.body.id, req.body.title, req.body.author, req.body.numOfPages);
    const bookToUpdate = books.find(book => book.id == updateBook.id);
    const index = books.indexOf(bookToUpdate);
    if (index != -1) {
        // books.splice(index, 1, bookToUpdate);
        books[index] = updateBook;
        res.end('Update successful!');
    }
    res.end('Can\'t find the book to update');
}).delete('/', (req, res, next) => {
    // Delete by book ID
    const idBookToDetele = req.body.id;
    const bookToDelete = books.find(book => book.id == idBookToDetele);
    const index = books.indexOf(bookToDelete);
    if (index != -1) {
        res.end(`Delete successful! ${JSON.stringify(books.splice(index, 1)[0])}`);
    }
    res.end('Can\'t find the book to delete');
})

module.exports = router;