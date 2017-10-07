const express = require('express');
const router = express.Router();

const Book = require('../model/Book');

router.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        res.status(200).json({
            books: books
        });
    });
}).get('/:id', (req, res, next) => {
    const id = req.params.id;
    Book.findOne({_id: id}, (err, book) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        res.status(200).json({
            books: book,
            publisher: book.getPublisher()
        });
    });
}).post('/', (req, res, next) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        published_date: new Date(req.body.published_date),
        pages: req.body.pages,
        language: req.body.language,
        publisher: {
            name: req.body.publisher_name,
            founded: req.body.publisher_founded,
            location: req.body.publisher_location
        }
    });

    const save = book.save();
    save.then((book) => {
        res.status(200).json({
            book: book,
            publisher: book.getPublisher()
        })
    }).catch(err => {
        return res.status(500).json({
            title: 'An error occured',
            error: err
        });
    })
}).put('/:id', (req, res, next) => {
    const id = req.params.id;
    Book.findOne({_id: id}, (err, book) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        book.title = req.body.title;
        book.author = req.body.author;
        book.published_date = req.body.published_date;
        book.pages = req.body.pages;
        book.language = req.body.language;
        book.setPublisher(req.body.publisher_name, req.body.publisher_founded, req.body.publisher_location);

        const save = book.save();
        save.then((book) => {
            res.status(200).json({
                message: 'Update successful!',
                book: book,
                publisher: book.getPublisher()
            })
        }).catch(err => {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        })
    })
}).delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Book.findOne({_id: id}, (err, book) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        const save = book.remove();
        save.then((book) => {
            res.status(200).json({
                message: 'Remove successful!',
                book: book,
                publisher: book.getPublisher()
            })
        }).catch(err => {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        })
    })
})

module.exports = router;