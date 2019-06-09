const db = require('./dbConnect')

const itineraryService = {}

itineraryService.getItinerary = (trip_id) => {
    return db.manyOrNone('SELECT itinerary.*, itinerary_types.name as itinerary_name FROM itinerary INNER JOIN itinerary_types ON itinerary_types.id = itinerary.type_id WHERE trip_id = ${trip_id};', { trip_id })
}

itineraryService.getItineraryTypes = () => {
    return db.manyOrNone('SELECT * FROM itinerary_types')
}

itineraryService.addItinerary = (name, address, phone, note, trip_id, itinerary_type) => {
    return db.none('INSERT INTO itinerary (name, address, phone_number, note, trip_id, type_id) VALUES (${name}, ${address}, ${phone}, ${note}, ${trip_id}, ${itinerary_type})', {name, address, phone, note, trip_id, itinerary_type})
}

module.exports = itineraryService