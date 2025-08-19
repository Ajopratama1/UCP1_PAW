const bookRepository = require('../src/repositories/bookRepository');

class BookUseCase {
  async getAllBooks() {
    return await bookRepository.getAllBooks();
  }

  async getBookById(id) {
    return await bookRepository.getBookById(id);
  }

  async createBook(book) {
    return await bookRepository.createBook(book);
  }

  async updateBook(id, book) {
    return await bookRepository.updateBook(id, book);
  }

  async deleteBook(id) {
    return await bookRepository.deleteBook(id);
  }
}

module.exports = new BookUseCase();