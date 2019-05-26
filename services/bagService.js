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

BagService.update = (data, id) => {
    const keys = Object.keys(data);
    let sql = 'UPDATE bags SET ';

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'id') continue;
        if (i === keys.length - 1) {
            sql += `${keys[i]}=` + '$' + `[${keys[i]}] `
        } else {
            sql += `${keys[i]}=` + '$' + `[${keys[i]}], `
        };
    };
    sql += 'WHERE id = $[id];';
    return db.none(sql, { ...data, id });
}

module.exports = BagService;