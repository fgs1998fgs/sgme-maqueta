// Lo unico que necesita JavaScript es abrir y cerrar el menu en movil.
// Se mantiene el estado en aria-expanded para que un lector de pantalla
// anuncie si esta abierto o cerrado.
document.addEventListener('DOMContentLoaded', function () {
  var boton = document.querySelector('.menu-boton');
  var lista = document.querySelector('nav ul');
  if (!boton || !lista) return;
  boton.addEventListener('click', function () {
    var abierto = lista.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
});
