const user = require("../repository/user.repo");

const getAllUserService = async () => {
  const users = await user.getAllUser();
  users;

  return users;
};

module.exports = { getAllUserService };
