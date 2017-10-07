const express = require('express');
const router = express.Router();

const CD = require('../model/CD');

router.get('/', (req, res, next) => {
    CD.find((err, cds) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        res.status(200).json({
            cds: cds
        });
    });
}).get('/:id', (req, res, next) => {
    const id = req.params.id;
    CD.findOne({_id: id}, (err, cd) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        if (!cd) {
            return res.status(404).json({
                title: 'Not Found',
                error: '404 not found'
            });
        }

        res.status(200).json({
            cd: cd
        });
    });
}).post('/', (req, res, next) => {
    const cd = new CD({
        title: req.body.title,
        singer: req.body.singer,
        releaseYear: req.body.releaseYear
    });

    const save = cd.save();
    save.then((cd) => {
        res.status(200).json({
            cd: cd
        })
    }).catch(err => {
        return res.status(500).json({
            title: 'An error occured',
            error: err
        });
    })
}).put('/:id', (req, res, next) => {
    const id = req.params.id;
    CD.findOne({_id: id}, (err, cd) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        cd.title = req.body.title;
        cd.singer = req.body.singer;
        cd.releaseYear = req.body.releaseYear;

        const save = cd.save();
        save.then((cd) => {
            res.status(200).json({
                message: 'Update successful!',
                cd: cd,
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
    CD.findOne({_id: id}, (err, cd) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        const save = cd.remove();
        save.then((cd) => {
            res.status(200).json({
                message: 'Remove successful!',
                cd: cd,
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