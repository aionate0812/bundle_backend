const express = require('express')
const axios = require('axios')

const config = require('../config.json'  || process.env.CONFIG)

const weatherRouter = express.Router()

weatherRouter.get('/', async (req, res) => {
    const {lng, lat} = req.query
    
    const weather = await axios({
        method:'get',
        url:`https://api.darksky.net/forecast/${config.DARKSKY_API_KEY}/${lat},${lng}`
    }) 
        res.json(weather.data.daily)
})

module.exports = weatherRouter