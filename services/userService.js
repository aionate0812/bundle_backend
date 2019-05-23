const db = require('./dbConnect');
const UserService = {};

UserService.createUser = (uid, username, email) => {
    const sql = `
        INSERT INTO users (uid, username, email)
        VALUES ($[uid], $[username], $[email])
        RETURNING id;
    `;
    return db.one(sql, { uid, username, email });
};

UserService.readUserByUid = uid => {
    const sql = `
        SELECT *
        FROM users
        WHERE users.uid = $[uid]
    `;

    return db.one(sql, { uid });
};

UserService.readUserById = id => {
    const sql = `
        SELECT *
        FROM users
        WHERE users.id = $[id]
    `;

    return db.one(sql, { id });
};

UserService.readUserByEmail = email => {
    const sql = `
        SELECT *
        FROM users
        WHERE users.email = $[email]
    `;

    return db.one(sql, { email });
};

module.exports = UserService;