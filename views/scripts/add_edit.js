document.getElementById("btnSubmit").addEventListener('click', async (e) => {
  e.preventDefault();
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type");
  if (type.replaceAll('"', '') == "Tambah") {
    
  } else if (type.replaceAll('"', '') == "Edit") {
    
  }
});
