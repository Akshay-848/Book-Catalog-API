const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const BookService = require('../services/book.service');

exports.create = asyncHandler(async (req, res) => {
  const book = await BookService.createBook(req.body);
  return res.status(201).json(new ApiResponse(true, 'Book created', { book }));
});

exports.getAll = asyncHandler(async (req, res) => {
  const books = await BookService.listBooks();
  return res.status(200).json(new ApiResponse(true, 'Books fetched', { books }));
});

exports.getById = asyncHandler(async (req, res) => {
  const book = await BookService.getBook(req.params.id);
  if (!book) throw new ApiError(404, 'Book not found');
  return res.status(200).json(new ApiResponse(true, 'Book fetched', { book }));
});

exports.update = asyncHandler(async (req, res) => {
  const book = await BookService.updateBook(req.params.id, req.body);
  if (!book) throw new ApiError(404, 'Book not found');
  return res.status(200).json(new ApiResponse(true, 'Book updated', { book }));
});

exports.remove = asyncHandler(async (req, res) => {
  const book = await BookService.deleteBook(req.params.id);
  if (!book) throw new ApiError(404, 'Book not found');
  return res.status(200).json(new ApiResponse(true, 'Book deleted'));
});
