const db = require('./dbConnect')

const itineraryService = {}

itineraryService.getItinerary = (trip_id) => {
    return db.manyOrNone('SELECT itinerary.*, itinerary_type.name as itinerary_name FROM itinerary INNER JOIN itinerary_type ON itinerary_type.id = itinerary.type_id WHERE trip_id = ${trip_id};', { trip_id })
}

module.exports = itineraryService