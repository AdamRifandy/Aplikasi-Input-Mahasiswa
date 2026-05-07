import { DatabaseSync } from "node:sqlite";

const conn = new DatabaseSync("data_universitas.db");

try {
  conn.exec(`
    CREATE TABLE IF NOT EXISTS mahasiswa (
      id_mahasiswa INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT NOT NULL,
      kelas TEXT NOT NULL,
      jurusan TEXT NOT NULL
    )
  `);
} catch (err) {
  console.error(err);
}

export default conn;
