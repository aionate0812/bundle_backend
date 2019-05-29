const db = require('./dbConnect');

const createUser = (uid, username, email) => {
    const sql = `
        INSERT INTO users (uid, username, email)
        VALUES ($[uid], $[username], $[email])
        RETURNING id;
    `;
    return db.one(sql, { uid, username, email });
};

const readUserByUid = uid => {
    const sql = `
        SELECT *
        FROM users
        WHERE users.uid = $[uid]
    `;

    return db.one(sql, { uid });
};

const readUserById = id => {
    const sql = `
        SELECT *
        FROM users
        WHERE users.id = $[id]
    `;

    return db.one(sql, { id });
};

const readUserByEmail = email => {
    const sql = `
        SELECT *
        FROM users
        WHERE users.email = $[email]
    `;

    return db.one(sql, { email });
};

module.exports = {
    createUser,
    readUserByUid,
    readUserById,
    readUserByEmail
};