const express = require('express')
const itineraryRouter = express.Router()

const itineraryService = require('../services/itineraryService')


itineraryRouter.get('/:trip_id', (req, res) => {
    const { trip_id } = req.params
    itineraryService.getItinerary(trip_id)
    .then( itineraryData => {
        res.json(itineraryData)
    }, err => {
        console.log(err)
        res.status(400)
        res.json({msg:'Could not get itinerary'})
    })
})

itineraryRouter.get('/types/all', (req, res) => {
    itineraryService.getItineraryTypes()
    .then( (itineraryTypes) => {
        res.json(itineraryTypes)
    }, err => {
        console.log(err)
        res.status(400)
        res.json({msg:'Could not get itinerary types'})
    })
})

itineraryRouter.post('/', (req, res) => {
    const {name, address, phone, note, trip_id, itinerary_type} = req.body
    itineraryService.addItinerary(name, address, phone, note, trip_id, itinerary_type)
    .then( () => {
        return itineraryService.getItinerary(trip_id) 
    }, err => {
        console.log(err)
        res.json({msg:'Could not add itinerary'})
    })
    .then( itineraries => {
        console.log(itineraries)
        res.json({itineraries})
    }, err => {
        console.log(err)
        res.json({msg:'Could not get itineraries'})
    })
})

module.exports = itineraryRouter