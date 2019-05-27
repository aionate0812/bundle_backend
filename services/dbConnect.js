const pgp = require('pg-promise')({})
const config = require(process.env.CONFIG || '../config.json')
const db = pgp(process.env.DATABASE_URL || config.dba)

module.exports = db

