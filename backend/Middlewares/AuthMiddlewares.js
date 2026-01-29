const User = require("../model/UsersModel");

const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'unauthorized, JWT token is required' });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized, JWT token or expired", })
  }
};

