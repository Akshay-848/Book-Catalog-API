const Book = require('../models/Book');

const listBooks = () => Book.find().sort({ createdAt: -1 });
const getBook = (id) => Book.findById(id);
const createBook = (payload) => Book.create(payload);
const updateBook = (id, payload) => Book.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
const deleteBook = (id) => Book.findByIdAndDelete(id);

module.exports = { listBooks, getBook, createBook, updateBook, deleteBook };
