// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path based on your project structure
const { errorResponse, successResponse } = require('../helpers/responseHelper');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, secretKey); // Replace 'your-secret-key' with a secure secret key

    const user = await User.findOne({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).send(errorResponse('Please authenticate', 401));
  }
};

module.exports = authenticateUser;
