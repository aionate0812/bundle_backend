const db = require('./dbConnect');
const TripService = {};

TripService.create = (name, country, city, departure_date, return_date, user_id) => {
    const sql = `
    INSERT INTO trip (name, country, city, departure_date, return_date, user_id)
    VALUES ($[name], $[country], $[city], $[departure_date], $[return_date], $[user_id])
    RETURNING id;
    `;
    return db.one(sql, { name, country, city, departure_date, return_date, user_id })
}


module.exports = TripService;