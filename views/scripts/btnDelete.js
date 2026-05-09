async function deleteData(id) {
  try {
    const getData = await fetch(`http://localhost:1945/mahasiswa/delete/{$id}`, {
      method: "DELETE"
    });
    const response = await getData.json();
    if (!getData.ok) return response;
    return response;
  } catch (err) {
    return err;
  }
}

document.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.id == "btnDelete") {
    const id = e.target.dataset.id;
    try {
      const result = await deleteData(id);
      if (result.status == false) {
        console.error(result);
        alert(result.message);
        return;
      }
      alert(result.message);
      window.location.href = "./";
    } catch (err) {
      console.error(err);
    }
  }
});
