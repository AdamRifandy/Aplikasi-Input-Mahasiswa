document.addEventListener("DOMContentLoaded", async () => {
  try {
    const tbody = document.getElementById("table-body");
    const getData = await fetch("http://localhost:3000/mahasiswa/all");
    const response = await getData.json();
    if (!getData.ok) {
      alert(response.message);
      console.error(response);
      return;
    }
    if (response.data.length === 0) {
      const row = document.createElement('row');
      const td = document.createElement('td');
      td.textContent = "Tidak ada data mahasiswa yang tersedia...";
      row.appendChild(td);
      tbody.appendChild(row);
    } else {
      for (let i = 0; i < response.data.length; i++) {
        const row = document.createElement('tr');
        const no = document.createElement('td');
        no.textContent = i + 1;
        row.appendChild(no);
        const nama = document.createElement('td');
        nama.textContent = response.data[i].nama;
        row.appendChild(nama);
        const kelas = document.createElement('td');
        kelas.textContent = response.data[i].kelas;
        row.appendChild(kelas);
        const jurusan = document.createElement('td');
        jurusan.textContent = response.data[i].jurusan;
        row.appendChild(jurusan);
        const action = document.createElement('td');
        const btnEdit = document.createElement('button');
        btnEdit.textContent = "Edit";
        btnEdit.id = "btnEdit";
        btnEdit.dataset.id = response.data[i].id_mahasiswa;
        action.appendChild(btnEdit);
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.id = "btnDelete";
        btnDelete.dataset.id = response.data[i].id_mahasiswa;
        action.appendChild(btnDelete);
        row.appendChild(action);
        tbody.appendChild(row);
      }
    }
  } catch (err) {
    console.error(err);
  }
});