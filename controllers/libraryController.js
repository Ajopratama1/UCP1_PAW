const bookUseCase = require('../src/usecases/bookUseCase');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookUseCase.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await bookUseCase.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newBook = await bookUseCase.createBook({ title, author, year });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const { id } = req.params;
    const book = await bookUseCase.getBookById(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    const updatedBook = await bookUseCase.updateBook(id, { title, author, year });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookUseCase.getBookById(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    await bookUseCase.deleteBook(id);
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};