
document.addEventListener('DOMContentLoaded', function () {
  // Filtro de galería
  const filtro = document.getElementById('filtro-servicio');
  const servicios = document.querySelectorAll('.servicio');

  if (filtro) {
    filtro.addEventListener('change', function () {
      const categoria = filtro.value;

      servicios.forEach(function (item) {
        if (categoria === 'todos' || item.classList.contains(categoria)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Validación del formulario de contacto 
  const formulario = document.querySelector('form');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      const nombre = document.getElementById('name');
      const correo = document.getElementById('email');
      const mensaje = document.getElementById('message');

      if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
        e.preventDefault();
        alert('Por favor, complete todos los campos.');
      } else if (!/\S+@\S+\.\S+/.test(correo.value)) {
        e.preventDefault();
        alert('Ingrese un correo electrónico válido.');
      }
    });
  }
});

