const db = require('./dbConnect');
const ItemService = {};

ItemService.create = (name, packed, quantity, bag_id, category_id, image, important = false) => {
const sql = `
INSERT INTO items (name, packed, quantity, bag_id, category_id, image, important)
VALUES ($[name], $[packed], $[quantity], $[bag_id], $[category_id], $[image], $[important])
RETURNING id;
`
return db.one(sql, { name, packed, quantity, bag_id, category_id, image, important })
}

ItemService.update = (data, id) => {
    const keys = Object.keys(data);
    let sql = 'UPDATE items SET ';

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

ItemService.delete = (id) => {
    const sql = `
    DELETE FROM items i
    WHERE i.id = $[id]
    `;
    return db.oneOrNone(sql, { id });

};


module.exports = ItemService;