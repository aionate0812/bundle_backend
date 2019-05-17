const db = require('./dbConnect');
const BagService = {};

BagService.create = (trip_id, type_id) => {
    const sql = `
    INSERT INTO bags (trip_id, type_id)
    VALUES ($[trip_id], $[type_id])
    RETURNING id;
    `;
    return db.one(sql, { trip_id, type_id });
}

module.exports = BagService;