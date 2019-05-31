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

BagService.read = (id) => {
    const sql = `
    SELECT * 
    FROM bags b
    WHERE b.id = $[id]
    `
    return db.oneOrNone(sql, { id });
}

BagService.readAll = (id) => {
    const sql = `
    SELECT b.id AS bag_id, i.id AS item_id, * 
    FROM bags b
    JOIN items i
    ON b.id = i.bag_id
    WHERE b.id = $[id]
    `
    return db.any(sql, { id });
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
};

BagService.delete = (id) => {
    const sql = `
    DELETE FROM bags b
    WHERE b.id = $[id]
    `;
    return db.none(sql, { id });

};

module.exports = BagService;