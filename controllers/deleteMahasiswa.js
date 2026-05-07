import conn from "../db/connection.js";

export default (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const sql = conn.prepare("DELETE FROM mahasiswa WHERE id_mahasiswa = ?").run(id);
    if (!sql) return res.status(400).json({
      message: "Gagal menghapus data mahasiswa!",
      data: sql,
      status: false
    });
    return res.json({
      message: "Berhasil menghapus data mahasiswa.",
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
