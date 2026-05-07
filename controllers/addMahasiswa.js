import conn from "../db/connection.js";

export default (req, res) => {
  const { nama, kelas, jurusan } = req.body;
  try {
    if (!nama || !kelas || !jurusan) return res.status(400).json({
      message: "Input tidak boleh kosong!",
      data: {},
      status: false
    });
    const sql = conn.prepare("INSERT INTO mahasiswa (nama, kelas, jurusan) VALUES (?, ?, ?)").run(nama, kelas, jurusan);
    if (!sql) return res.status(500).json({ message: "Data mahasiswa gagal di input!", data: sql, status: false });
    return res.status(201).json({
      message: "Data mahasiswa berhasil di input.",
      data: sql,
      status: true
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      data: err,
      status: false
    });
  }
};
