const { StatusCodes } = require("http-status-codes");
const service = require("../services/auth.service");

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await service.loginUser(email, password);
  // (result);

  res.status(StatusCodes.OK).json(result);
};

const register = async (req, res) => {
  const { fullname, password, email } = req.body;

  const user = await service.registerUser(fullname, email, password);
  res.status(201).json(user);
};

module.exports = { login, register };
