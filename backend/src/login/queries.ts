const addUser = "INSERT INTO login (username, password) VALUES ($1, $2)";
const getUser = "SELECT * FROM login WHERE id = $1";
const getUserByUsername = "SELECT * FROM login WHERE username = $1";

export default {
  addUser,
  getUser,
  getUserByUsername,
};
