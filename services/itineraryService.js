const db = require('./dbConnect')

const itineraryService = {}

itineraryService.getItinerary = (trip_id) => {
    return db.manyOrNone('SELECT itinerary.*, itinerary_types.name as itinerary_name FROM itinerary INNER JOIN itinerary_types ON itinerary_types.id = itinerary.type_id WHERE trip_id = ${trip_id};', { trip_id })
}

module.exports = itineraryService