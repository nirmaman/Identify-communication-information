const express = require('express')
const { submitSimple, submitAdvanced } = require('./service')
var router = express.Router()

router.get('/submitSimple', submitSimple)
router.get('/submitAdvanced', submitAdvanced)

module.exports = router
