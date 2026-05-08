import conn from "../db/connection.js";

export default (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const prepare = conn.prepare("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?").run(id);
    if (!prepare) return res.status(500).json({
      message: "Gagal mendapatkan data mahasiswa",
      data: prepare,
      status: false
    });
    return res.json({
	massage: 'berhasil mendapatkan data mahasiswa',
	data: prepare,
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
