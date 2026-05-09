async function add_mahasiswa(nama, kelas, jurusan) {
  
}

async function edit_mahasiswa(nama, kelas, jurusan, id) {
  
}

document.getElementById("btnSubmit").addEventListener('click', async (e) => {
  e.preventDefault();
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type");
  if (type.replaceAll('"', '') == "Tambah") {
    
  } else if (type.replaceAll('"', '') == "Edit") {
    
  }
});
