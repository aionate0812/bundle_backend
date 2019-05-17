const db = require('./dbConnect');
const TripService = {};

TripService.create = (name, country, city, departure_date, return_date, user_id) => {
    const sql = `
    INSERT INTO trips (name, country, city, departure_date, return_date, user_id)
    VALUES ($[name], $[country], $[city], $[departure_date], $[return_date], $[user_id])
    RETURNING id;
    `;
    return db.one(sql, { name, country, city, departure_date, return_date, user_id })
}

TripService.read = (id) => {
const sql = `
SELECT *
FROM trips t
WHERE t.id = $[id]
`
return db.one(sql, { id });
}

module.exports = TripService;