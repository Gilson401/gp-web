
const menuButton = document.getElementById('hamburgmenu');
const favDialog = document.getElementById('favDialog');


menuButton.addEventListener('click', () => {
  favDialog.showModal();
});

favDialog.addEventListener('click', () => {
    favDialog.close();
  });