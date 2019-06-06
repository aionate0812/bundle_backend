const pgp = require('pg-promise')({})
const config = require('../config')
const db = pgp(process.env.DATABASE_URL || config.dba)

module.exports = db

