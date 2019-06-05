const db = require('./dbConnect')
const loginHomepageService = {}

loginHomepageService.getTrips = (user_id) => {
    return db.manyOrNone('SELECT * FROM trips WHERE user_id = ${user_id}', {user_id})
}

module.exports = loginHomepageService
