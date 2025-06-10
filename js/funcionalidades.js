
const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        const nombre = document.getElementById("name").value.trim();
        const correo = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("message").value.trim();

        if (!nombre || !correo || !mensaje) {
            e.preventDefault();
            alert("Por favor, complete todos los campos del formulario.");
        } else if (!validarEmail(correo)) {
            e.preventDefault();
            alert("Por favor, ingrese un correo electrónico válido.");
        }
    });
}

function validarEmail(email) {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function filtrarServicios(categoria) {
    const items = document.querySelectorAll("main ul li");

    items.forEach(item => {
        if (categoria === "todos" || item.textContent.toLowerCase().includes(categoria.toLowerCase())) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

