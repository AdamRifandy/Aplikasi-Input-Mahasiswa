import conn from "../db/connection.js";

export default (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, kelas, jurusan } = req.body;
  try {
    if (!nama || !kelas || !jurusan) return res.status(400).json({
      message: "Input tidak boleh kosong!",
      data: {},
      status: false
    });
    const sql = conn.prepare("UPDATE mahasiswa SET nama = ?, kelas = ?, jurusan = ? WHERE id_mahasiswa = ?").run(nama, kelas, jurusan, id);
    if (!sql) return res.status(400).json({
      message: "Gagal mengedit data mahasiswa!",
      data: sql,
      status: false
    });
    return res.json({
      message: "Berhasil mengedit data mahasiswa.",
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
