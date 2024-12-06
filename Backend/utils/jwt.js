const jwt = require('jsonwebtoken');
require("dotenv").config();

async function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' });
}

async function compareToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = { createToken, compareToken };