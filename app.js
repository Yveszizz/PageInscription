const modal = document.getElementById("myModal");
var windowObjectReference;

// Get the button that opens the modal
const topBarLoginBtn = document.getElementById("topbar-login-button");
const loginLink = document.querySelector("#login-link");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const formInscriptionBtn = document.querySelector(".unlogged-btn-pink");
const formInscription = document.querySelector(".unlogged-form");
const allInputs = document.querySelector(".unlogged_input");

// When the user clicks on the button, open the modal
topBarLoginBtn.addEventListener("click", openModal);
loginLink.addEventListener("click", openModal);
function openModal () {
  modal.style.display = "block";
}    

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// incription button
formInscriptionBtn.addEventListener("click", checkForm);

function checkForm (boolean){
    let result = formInscription.checkValidity();
    if(result){
        window.open("index2.html", "_self");
        stockPersonalInfos();   
    } 
}
function openRequestedPopup() { 
}

function stockPersonalInfos (){
    localStorage.setItem("Prenom",formInscription[0].value);
    localStorage.setItem("Nom",formInscription[1].value);
    localStorage.setItem("Email",formInscription[2].value);
    localStorage.setItem("Pseudo",formInscription[3].value);
    localStorage.setItem("mdp",formInscription[4].value);
    localStorage.setItem("Genre",formInscription[6].value);
    localStorage.setItem("Age",formInscription[7].value);
}