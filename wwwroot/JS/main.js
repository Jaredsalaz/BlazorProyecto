//Mayusculas en el input del RFC
// Transforma el texto ingresado a mayúsculas
function toUpperCase(inputId) {
  var input = document.getElementById(inputId);
  input.value = input.value.toUpperCase();
}
// Añade un event listener al input para transformar el texto a mayúsculas
document.getElementById('input2').addEventListener('input', function() { toUpperCase('input2'); });


//Input icono de X 
// funcion para limpiar el input 
function clearInput(inputId) {
  var input = document.getElementById(inputId);
  input.value = '';
  input.nextElementSibling.style.display = 'none'; // Oculta el icono después de borrar el texto
}

// Muestra u oculta el icono según si hay texto en el input
function toggleIcon(inputId) {
  var input = document.getElementById(inputId);
  var icon = input.nextElementSibling;
  icon.style.display = input.value ? 'inline' : 'none';
}

// Añade event listeners a los inputs para mostrar u ocultar el icono
document.getElementById('input1').addEventListener('input', function() { toggleIcon('input1'); });
document.getElementById('input2').addEventListener('input', function() { toggleIcon('input2'); });


//Modal alert
function showAlert() {
  var alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.innerHTML = `
    <i class="fas fa-exclamation-triangle"></i>
    <p>La busqueda no arrojo ningun resultado, <br>Por favor revise su criterio de busqueda</p>
    <button onclick="closeAlert()">Aceptar</button>
  `;
  document.body.appendChild(alertDiv);
}

function closeAlert() {
  var alertDiv = document.querySelector('.alert');
  document.body.removeChild(alertDiv);
  showSecondAlert();
}

function showSecondAlert() {
  var alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.innerHTML = `
    <i class="fas fa-question-circle icon"></i> <!-- Agrega la clase 'icon' -->
    <p>No se encontro el RFC solicitado, <br>¿Desea adherirlo al fondo?</p>
    <div class="button-container">
      <button onclick="closeSecondAlert()">Cancelar</button>
      <button onclick="closeSecondAlert()">Aceptar</button>
    </div>
  `;
  document.body.appendChild(alertDiv);
}

function closeSecondAlert() {
  var alertDiv = document.querySelector('.alert');
  document.body.removeChild(alertDiv);
}


// Campana de notificación y menu de notificaciones
function showNotificationModal() {
  var modal = document.createElement('div');
  modal.id = 'notification-modal';
  modal.innerHTML = `
    <i class="fas fa-times close"></i> <!-- Botón de cierre con icono -->
    <p>Tienes una nueva notificación</p> <!-- Notificación de prueba -->
    <p>Un cliente</p>
  `;
  document.body.appendChild(modal);

  // Muestra el punto de notificación cuando hay una notificación
  document.querySelector('.notification-dot').style.display = 'block';

  // Muestra el modal de notificación
  modal.style.display = 'block';

  // Cierra el modal cuando se hace clic en el botón de cierre
  modal.querySelector('.close').addEventListener('click', function(event) {
    event.stopPropagation();
    closeNotificationModal();
  });
}
function closeNotificationModal() {
  var modal = document.querySelector('#notification-modal');
  document.body.removeChild(modal);
}
var campana = document.querySelector('.campana');
campana.addEventListener('click', function(event) {
  // Evita que el evento de clic se propague a la ventana
  event.stopPropagation();

  // Muestra el modal de notificación cuando se hace clic en la campana
  showNotificationModal();
});
// Cierra el modal cuando se hace clic fuera de él
window.addEventListener('click', function(event) {
  if (document.querySelector('#notification-modal')) {
    closeNotificationModal();
  }
});




// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
