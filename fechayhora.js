// Aqui estara el script que dictara la hora actual.
const fechaHora = document.getElementById('fechaHora');

function actualizarHora() {
  fechaHora.textContent = new Date().toLocaleString();
}

actualizarHora();
setInterval(actualizarHora, 1000);