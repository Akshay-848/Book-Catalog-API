const User = require('../models/User');

const findByEmail = (email) => User.findOne({ email });
const createUser = (data) => User.create(data);

module.exports = { findByEmail, createUser };
