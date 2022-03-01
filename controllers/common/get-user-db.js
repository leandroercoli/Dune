const usersFromDB = require("../../mock/user/users.json");

const getUserFromDB = ({ id, email }) => {
  const user = (usersFromDB ?? []).find(
    (user) => user.id === Number(id) || user.email === email
  );
  return user;
};

module.exports = {
  getUserFromDB,
};
