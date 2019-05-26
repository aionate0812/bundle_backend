const db = require('./dbConnect');

const create = (task_name, complete = false, item_id, todolist_id) => {
    const sql = `
    INSERT INTO todo (task_name, complete, item_id, todolist_id)
    VALUES ($[task_name], $[complete], $[item_id], $[todolist_id])
    RETURNING id;
    `;
    return db.one(sql, { task_name, complete, item_id, todolist_id });
};

const update = (data, id) => {
    const keys = Object.keys(data);
    let sql = 'UPDATE todo SET ';

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

const deleteTodo = (id) => {
    const sql = `
    DELETE FROM todo t
    WHERE t.id = $[id]
    `;
    return db.none(sql, { id });

};

module.exports = {
    create,
    update,
    deleteTodo
};