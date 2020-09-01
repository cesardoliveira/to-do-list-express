const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Olá');
    res.send();
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Id: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`PUT Id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`DELTE Id: ${req.params.id}`)
})

module.exports = router;