import conn from '../db/connection.js';
export default (req, res) => {
  try {
    const prepare = conn.prepare("SELECT * FROM mahasiswa");
    if (!prepare) return res.status(500).json({
      message: "Gagal mendapatkan semua data mahasiswa",
      data: prepare,
      status: false
    });
    return res.json({
      message: "Berhasil mendapatkan semua data mahasiswa",
      data: prepare,
      status: true
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      data: err,
      status: false
    })
  }
};
