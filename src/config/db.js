const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // user default Laragon
  password: '',      // password default Laragon (kosong)
  database: 'perpustakaan' // nama database yang barusan dibuat
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL (Laragon)');
});

// Membuat tabel jika belum ada
db.query(`
  CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    year INT NOT NULL
  )
`);

module.exports = db;