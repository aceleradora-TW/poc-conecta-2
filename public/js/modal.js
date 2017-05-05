// $('.magic-button').click(function () {
//   $('.FundoEscuro').toggle();
//   $('.ModalConecta').fadeIn(3000);
// })


var modal = document.getElementById('myModal');
var btn1 = document.getElementsByClassName("magic-button")[0];
var btn2 = document.getElementsByClassName("magic-button")[1];
var btn3 = document.getElementsByClassName("magic-button")[2];
var btn4 = document.getElementsByClassName("magic-button")[3];


var span = document.getElementsByClassName("btn-close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

btn3.onclick = function() {
  modal.style.display = "block";
}

btn4.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
