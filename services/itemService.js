const db = require('./dbConnect');
const ItemService = {};

ItemService.create = (name, packed, quantity, bag_id, category_id) => {
const sql = `
INSERT INTO items (name, packed, quantity, bag_id, category_id)
VALUES ($[name], $[packed], $[quantity], $[bag_id], $[category_id])
RETURNING id;
`
return db.one(sql, { name, packed, quantity, bag_id, category_id })
}


module.exports = ItemService;