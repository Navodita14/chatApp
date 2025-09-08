const { StatusCodes } = require("http-status-codes");
const users = require("../services/user.service");

const getUsers = async (req, res) => {
  const userList = await users.getAllUserService();
  res.status(StatusCodes.OK).json(userList);
};

module.exports = { getUsers };
