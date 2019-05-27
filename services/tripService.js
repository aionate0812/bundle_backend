const db = require('./dbConnect');
const TripService = {};

TripService.create = (name, country, city, departure_date, return_date, user_id) => {
    const sql = `
    INSERT INTO trips (name, country, city, departure_date, return_date, user_id)
    VALUES ($[name], $[country], $[city], $[departure_date], $[return_date], $[user_id])
    RETURNING id;
    `;
    return db.one(sql, {
        name,
        country,
        city,
        departure_date,
        return_date,
        user_id
    });
}

TripService.read = (id) => {
    const sql = `
    SELECT *
    FROM trips t
    WHERE t.id = $[id]
    `;
    return db.one(sql, {
        id
    });
}

TripService.updateTrip = (data, id) => {
    const keys = Object.keys(data);
    let sql = 'UPDATE trips SET ';

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'id') continue;
        if (i === keys.length - 1) {
            sql += `${keys[i]}=` + '$' + `[${keys[i]}] `
        } else {
            sql += `${keys[i]}=` + '$' + `[${keys[i]}], `
        };
    };
    sql += 'WHERE id = $[id];';
    return db.none(sql, {
        ...data,
        id
    });
}

TripService.getAllListsByTripID = (id) => {
    const sql = `
        SELECT t.id AS trip_id, tl.id AS todolist_id, tl.name
        FROM trips t
        JOIN todolist tl
        ON t.id = tl.trip_id
        WHERE t.id = $[id]
    `;
    return db.any(sql, {
        id
    });
};

TripService.getAllBagsByTripID = (id) => {
    const sql = `
    SELECT t.id AS trip_id, b.id AS bag_id, b.type_id
    FROM trips t
    JOIN bags b
    ON t.id = b.trip_id
    WHERE t.id = $[id]
    `;
    return db.any(sql, {
        id
    });
};

TripService.delete = (id) => {
    const sql = `
    DELETE FROM trips t
    WHERE t.id = $[id]
    `;
    return db.none(sql, {
        id
    });

}

module.exports = TripService;