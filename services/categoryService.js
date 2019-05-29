const db = require('./dbConnect');
const CategoryService = {};

CategoryService.read = (id) => {
    const sql = `
    SELECT *
    FROM categories c
    WHERE c.id = $[id]
    `;
    return db.oneOrNone(sql, { id });
}

CategoryService.readAll = () => {
    const sql = `
    SELECT *
    FROM categories c
    `;
    return db.any(sql);
}

module.exports = CategoryService;