const express = require('express')
const itineraryRouter = express.Router()

const itineraryService = require('../services/itineraryService')


itineraryRouter.get('/:trip_id', (req, res) => {
    const { trip_id } = req.params

    itineraryService.getItinerary(trip_id)
    .then( itineraryData => {
        console.log(itineraryData)
        res.json(itineraryData)
    }, err => {
        console.log(err)
        res.status(400)
        res.json({msg:'Could not get itinerary'})
    })
})



module.exports = itineraryRouter