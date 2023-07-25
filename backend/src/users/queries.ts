const insertUser = `INSERT INTO users (name, email, password)
VALUES (\$1, \$2, \$3)
RETURNING id, password`;

const selectUserByEmail = `SELECT * FROM users
WHERE email = \$1`;

export default { insertUser, selectUserByEmail };
