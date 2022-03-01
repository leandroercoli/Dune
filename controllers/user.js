const { response } = require("express");
const { getUserFromDB } = require("./common/get-user-db");

const getUser = async (req, res = response) => {
  const { id } = req.params;
  const user = getUserFromDB({ id });

  if (user) {
    res.json({
      user,
    });
  }
  return res.sendStatus(404);
};

module.exports = {
  getUser,
};
