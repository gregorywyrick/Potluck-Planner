const router = require('express').Router();
const signature = require('../models/signuploadform');
require('../public/js/config');

const cloudinary = require('cloudinary').v2;
const cloudName = cloudinary.config().cloud_name;
const apiKey = cloudinary.config().api_key;

router.get('/', function (req, res, next) {
    const sig = signature.signuploadform()
    res.json({
        signature: sig.signature,
        timestamp: sig.timestamp,
        cloudname: cloudName,
        apikey: apiKey
    })
})

module.exports = router