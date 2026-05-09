async function deleteData(id) {
  try {
    const getData = await fetch(`http://localhost:1945/mahasiswa/delete/${id}`, {
      method: "DELETE"
    });
    const response = await getData.json();
    if (!getData.ok) {
      console.error(response);
      alert(response.message);
      return;
    }
    alert(response.message);
  } catch (err) {
    return err;
  }
}

document.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.id == "btnDelete") {
    const id = e.target.dataset.id;
    try {
      await deleteData(id);
      window.location.href = "./";
    } catch (err) {
      console.error(err);
    }
  }
});
