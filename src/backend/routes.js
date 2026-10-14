const express = require('express');
const { sendMail } = require('./mailController');


const router = express.Router();

router.post('/send-mail', sendMail);

module.exports = router