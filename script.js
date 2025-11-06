// Arreglo de imagenes para el carrusel
const imagenes = [
  "imagenes/ferrari/ferrari1.avif",
  "imagenes/ferrari/ferrari2.jpg",
  "imagenes/ferrari/ferrari3.jpg",
  "imagenes/mclaren/mclaren1.jpg",
  "imagenes/mclaren/mclaren2.jpg",
  "imagenes/mclaren/mclaren3.jpg",
  "imagenes/mercedes/mercedes1.avif",
  "imagenes/mercedes/mercedes2.webp",
  "imagenes/mercedes/mercedes3.webp",
  "imagenes/redbull/redbull1.jpg",
  "imagenes/redbull/redbull2.jpg",
  "imagenes/redbull/redbull3.jpg"
];

let indice = 0;

const img = document.getElementById("imagen");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

if (img && btnPrev && btnNext) {
  btnNext.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    img.src = imagenes[indice];
  });

  btnPrev.addEventListener("click", () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    img.src = imagenes[indice];
  });
}

// Validaciones 
const form = document.getElementById("form-contacto");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const resultado = document.getElementById("resultado");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{7,15}$/;

    let errores = [];

    if (nombre.length < 3) errores.push("El nombre debe tener al menos 3 caracteres.");
    if (!regexEmail.test(email)) errores.push("El email no tiene un formato valido.");
    if (!regexTelefono.test(telefono)) errores.push("El telefono debe contener solo numeros (7-15 digitos).");

    resultado.innerHTML = "";

    if (errores.length > 0) {
      errores.forEach(err => {
        const p = document.createElement("p");
        p.style.color = "#ff0000ff";
        p.textContent = err;    
        resultado.appendChild(p);
      });
    } else {
        // mensaje de exito
        const exito = document.createElement("div");
        exito.style.background = "#2b2b2b";
        exito.style.padding = "10px";
        exito.style.borderRadius = "5px";
        exito.style.marginTop = '10px';
        exito.style.width = '60%';
        exito.style.margin = '1rem auto';
        exito.innerHTML = `
        <h3>Datos enviados correctamente, en breve sera contactado por un supervisor.</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        `;
        resultado.appendChild(exito);
        form.reset();
    }
  });
}