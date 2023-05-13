const express = require('express');
const router = express.Router();
const Model = require('../models/orgModel');

router.post('/add', (req, res) => {
    let data = req.body;
    console.log(data);
    new Model(data).save()
        .then(() => {
            console.log('User Data Saved');
            res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.get('/getall', (req, res) => {

    Model.find({})
        .then((data) => {
            console.log('data fetched');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})
router.get('/getbyitem/:id', (req, res) => {

    Model.find({})
        .then((data) => {
            console.log('data fetched');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .then((data) => {
            console.log('fetched by id');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log('deleted by id');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;