const express = require('express');
const router = express.Router();
const CD = require('../model/cd');

let cds = [
    new CD(1, 'cd1', 'singer1', 1990),
    new CD(2, 'cd2', 'singer2', 1991),
    new CD(3, 'cd3', 'singer3', 1992)
];

router.get('/', (req, res, next) => {
    // Get all
    res.end(`CDs: ${JSON.stringify(cds)}`);
}).get('/:id', (req, res, next) => {
    // Get by ID
    const id = req.params.id;
    const cd = cds.find(cd => cd.id == id);
    res.end(`CD: ${JSON.stringify(cd)}`);
}).post('/', (req, res, next) => {
    const newcd = new CD(req.body.id, req.body.title, req.body.singer, req.body.releaseYear);
    const cd = cds.find(cd => cd.id == newcd.id);
    if (cd) {
        res.end('The cd with this ID is existed');
    } else {
        cds.push(newcd);
        res.end(`Posted: ${JSON.stringify(newcd)}`);
    }
}).put('/', (req, res, next) => {
    // Update by cd ID
    const updateCD = new CD(req.body.id, req.body.title, req.body.singer, req.body.releaseYear);
    const cdToUpdate = cds.find(cd => cd.id == updateCD.id);
    const index = cds.indexOf(cdToUpdate);
    if (index != -1) {
        cds[index] = updateCD;
        res.end('Update successful!');
    }
    res.end('Can\'t find the cd to update');
}).delete('/', (req, res, next) => {
    // Delete by cd ID
    const idCDToDetele = req.body.id;
    const cdToDelete = cds.find(cd => cd.id == idCDToDetele);
    const index = cds.indexOf(cdToDelete);
    if (index != -1) {
        res.end(`Delete successful! ${JSON.stringify(cds.splice(index, 1)[0])}`);
    }
    res.end('Can\'t find the cd to delete');
})

module.exports = router;