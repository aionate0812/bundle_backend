const pgp = require('pg-promise')({})
const config = require('../config.json')
const db = pgp(config.dba)

module.exports = db

