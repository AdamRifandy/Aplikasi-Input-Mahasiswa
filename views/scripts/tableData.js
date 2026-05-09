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
      
    }
  } catch (err) {
    console.error(err);
  }
});