function handleAddItem(e) {
  // e.preventDefault();
  const text = document.getElementById('item').value;
  if(text) {
    console.log('WOOO');
  }
}

document.getElementById('add').addEventListener('click', handleAddItem);
