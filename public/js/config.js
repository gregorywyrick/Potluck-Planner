const cloudinary = require('cloudinary').v2;

const myconfig = cloudinary.config({
    cloud_name: 'dlod5jkqc',
    api_key: '857935598987177',
    api_secret: 'jbGRSNOsfN78PJZnAVFb2HIitd8',
    secure: true
});

exports.myconfig = myconfig;