const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }

  token = token.split(' ')[1]; // Extract token from Bearer <token>

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id); // Add user details to request
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Not authorized, invalid token' });
  }
};
