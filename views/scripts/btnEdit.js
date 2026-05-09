document.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id == "btnEdit") {
    const id = e.target.dataset.id;
    window.location.href = `../add_edit.html?id=${id}&type="Edit"`;
  }
});
