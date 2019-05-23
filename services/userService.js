const db = require('./dbConnect');
const UserService = {};

UserService.createUser = (uid, username, email) => {
    const sql = `
        INSERT INTO users (uid, username, email)
        VALUES ($[uid], $[username], $[email])
        RETURNING id;
    `;
    return db.one(sql,{uid, username, email});
};

module.exports = UserService;