async function add_mahasiswa(nama, kelas, jurusan) {
  try {
    const sendData = await fetch("http://localhost:1945/mahasiswa/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        nama,
        kelas,
        jurusan
      })
    });
    const response = await sendData.json();
    if (!sendData.ok) {
      console.error(response);
      alert(response.message);
      return;
    }
    alert(response.message);
  } catch (err) {
    console.error(err);
  }
}

async function edit_mahasiswa(nama, kelas, jurusan, id) {
  try {
    const sendData = await fetch(`http://localhost:1945/mahasiswa/edit/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        nama,
        kelas,
        jurusan
      })
    });
    const response = await sendData.json();
    if (!sendData.ok) {
      console.error(response);
      alert(response.message);
      return;
    }
    alert(response.message);
  } catch (err) {
    console.error(err);
  }
}

document.getElementById("btnSubmit").addEventListener('click', async (e) => {
  e.preventDefault();
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type");
  const nama = document.getElementById("nama");
  const kelas = document.getElementById("kelas");
  const jurusan = document.getElementById("jurusan");
  if (type.replaceAll('"', '') == "Tambah") {
    try {
      await add_mahasiswa(nama.value, kelas.value, jurusan.value);
    } catch (err) {
      console.error(err);
    }
  } else if (type.replaceAll('"', '') == "Edit") {
    try {
      const id = url.searchParams.get("id");
      await edit_mahasiswa(nama.value, kelas.value, jurusan.value, id);
    } catch (err) {
      console.error(err);
    }
  }
});

async function get_mahasiswa(id) {
  try {
    const getData = await fetch(`http://localhost:1945/mahasiswa/get/${id}`, {
      method: "POST"
    });
    const result = await getData.json();
    if (!getData.ok) {
      return result;
    }
    return result;
  } catch (err) {
    return err;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    const getMahasiswa = await get_mahasiswa(id);
    if (getMahasiswa.status == false) {
      alert(getMahasiswa.message);
      return;
    }
    document.getElementById("nama").value = getMahasiswa.data.nama;
    document.getElementById("kelas").value = getMahasiswa.data.kelas;
    document.getElementById("jurusan").value = getMahasiswa.data.jurusan;
  } catch (err) {
    console.error(err);
  }
});
