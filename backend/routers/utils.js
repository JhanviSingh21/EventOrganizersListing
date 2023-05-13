const multer = require('multer');
const express = require('express');
const router = express.Router();

// setting the destination
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './static/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// initializing multer object
const uploader = multer({ storage: fileStorage })

// handling file upload request
router.post('/addfile', uploader.single('file'), (req, res) => {
    res.json({ message: 'file upload success' });
})

module.exports = router;