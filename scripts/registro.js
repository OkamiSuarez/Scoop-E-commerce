const formularioRegistro = document.getElementById("formRegistro");
let datosUsuario = {};

formularioRegistro.addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;
  const telefono = document.getElementById("telefono").value;

  e.preventDefault();

  datosUsuario = {
    nombre,
    direccion,
    correo,
    contraseña,
    telefono,
  };

  const infoUserJson = JSON.stringify(datosUsuario);
  sessionStorage.setItem("datosDeUsuario", infoUserJson);

  Swal.fire({
    title: "Registro exitoso",
    text: `Vamos a iniciar sesion ${datosUsuario.nombre}`,
    icon: "success",
    showConfirmButton: "Ok",
    timer: 2000,
  }).then(() => {
    window.location.href = "../index.html";
  });
});

function esconderRegistro() {
  displayFormularioRegistro.style.display = "none";
}
function mostrarRegistro() {
  const displayFormularioRegistro = document.getElementById("formRegistro");
  displayFormularioRegistro.style.display = "block";
}
