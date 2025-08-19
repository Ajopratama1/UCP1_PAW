const db = require('../config/db');

class BookRepository {
  getAllBooks() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM books', (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  getBookById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  }

  createBook(book) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO books (title, author, year) VALUES (?, ?, ?)',
        [book.title, book.author, book.year],
        (err, result) => {
          if (err) reject(err);
          else resolve({ id: result.insertId, ...book });
        }
      );
    });
  }

  updateBook(id, book) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?',
        [book.title, book.author, book.year, id],
        (err) => {
          if (err) reject(err);
          else resolve({ id, ...book });
        }
      );
    });
  }

  deleteBook(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM books WHERE id = ?', [id], (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

module.exports = new BookRepository();