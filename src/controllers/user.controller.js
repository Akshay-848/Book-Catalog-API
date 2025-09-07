const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { signToken } = require('../utils/jwt');
const UserService = require('../services/user.service');

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await UserService.findByEmail(email);
  if (existing) throw new ApiError(400, 'Email already registered');

  const user = await UserService.createUser({ name, email, password });

  const dto = { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt };
  return res.status(201).json(new ApiResponse(true, 'User registered successfully', { user: dto }));
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserService.findByEmail(email);
  if (!user) throw new ApiError(401, 'Invalid credentials');

  const ok = await user.comparePassword(password);
  if (!ok) throw new ApiError(401, 'Invalid credentials');

  const token = signToken({ sub: user._id, email: user.email });
  return res.status(200).json(new ApiResponse(true, 'Login successful', { token }));
});
