const db = require('./dbConnect');
const CategoryService = {};

CategoryService.read = (id) => {
    const sql = `
    SELECT *
    FROM categories c
    WHERE c.id = $[id]
    `;
    return db.one(sql, { id });
}

module.exports = CategoryService;