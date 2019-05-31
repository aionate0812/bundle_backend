const db = require('./dbConnect');

const create = (name, trip_id, list_type) => {
    const sql = `
    INSERT INTO todolist (name, trip_id, list_type)
    VALUES ($[name], $[trip_id], $[list_type])
    RETURNING id;
    `;
    return db.one(sql, { name, trip_id, list_type });
};

const read = (tdl_id) => {
    const sql =     `
    SELECT *
    FROM todolist tdl
    WHERE tdl.id = $[trip_id]
    `
    return db.oneOrNone(sql, { trip_id })
}

const readAllTodosFromList = (tdl_id) => {
    const sql =     `
    SELECT 
	tdl.id AS tdl_id,
	tds.id AS tds_id, 
	*
    FROM todolist tdl
	JOIN todos tds
	ON tdl.id = tds.todolist_id
    `
    return db.any(sql, { tdl_id })
}

const update = (data, id) => {
    const keys = Object.keys(data);
    let sql = 'UPDATE todolist SET ';

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

const deleteTodoList = (id) => {
    const sql = `
    DELETE FROM todolist tdl
    WHERE tdl.id = $[id]
    `;
    return db.none(sql, { id });

};

module.exports = {
    create,
    read,
    readAllTodosFromList,
    update,
    deleteTodoList
};