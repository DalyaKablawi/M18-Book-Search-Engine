const { Schema } = require("mongoose");

const bookSchema = new Schema({
  bookId: { type: String, required: true },
  authors: [String],
  title: { type: String, required: true },
  description: String,
  image: String,
  link: String,
});

module.exports = bookSchema;
