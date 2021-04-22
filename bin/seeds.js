const mongoose = require('mongoose');
const Book = require('../models/Book.model');
const DB_NAME = 'library-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Book.create(books)
  .then(booksFromDB => {
    console.log(`Created ${booksFromDB.length} books`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));