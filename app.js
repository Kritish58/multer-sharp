const express = require('express');
const chalk = require('chalk');
const multer = require('multer');
const mkdirp = require('mkdirp');
const path = require('path');
const { v4: uuid } = require('uuid');
const app = express();

const PORT = 3000;

mkdirp.sync(path.join(__dirname, '/uploads'));

const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, '/uploads');
    },
    filename: (req, file, done) => {
        done(null, uuid() + '___' + file.originalname);
    },
});

const limits = {
    fileSize: 5 * 1024 * 1024,
};

const fileFilter = (req, file, done) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        done(null, true);
    } else {
        done(new Error('file type not supported'), false);
    }
};

app.listen(PORT, () => {
    console.log(chalk.bold.yellow('server is running on port ', PORT));
});
