const { response } = require("express");
const { generateAccessToken } = require("../utils/token-generator");
const { getUserFromDB } = require("./common/get-user-db");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  // Ideally search the user in a database,
  // throw an error if not found.
  const user = getUserFromDB({ email });

  if (user) {
    const token = generateAccessToken(user?.username);

    res.json({
      token: `Bearer ${token}`,
      userid: user?.id,
    });
  }
  return res.sendStatus(401);
};

module.exports = {
  login,
};
