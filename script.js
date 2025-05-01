let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSiguienteSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(mostrarSiguienteSlide, 3000); 


const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value.trim();
    const conferencias = document.querySelectorAll("input[name='conferencias']:checked");

    if (!nombre || !correo || !carrera || conferencias.length === 0) {
      mensaje.textContent = "Por favor, completa todos los campos y selecciona al menos una conferencia.";
      mensaje.style.color = "red";
      return;
    }

    if (!correo.endsWith("@uamv.edu.ni")) {
      mensaje.textContent = "El correo debe ser institucional (@uamv.edu.ni)";
      mensaje.style.color = "red";
      return;
    }

    mensaje.textContent = "¡Registro exitoso!";
    mensaje.style.color = "green";
    form.reset();
  });
}
