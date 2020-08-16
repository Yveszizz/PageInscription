const modal = document.getElementById("myModal");
const topBarLoginBtn = document.getElementById("topbar-login-button");
const loginLink = document.querySelector("#login-link");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const formInscriptionBtn = document.querySelector(".unlogged-btn-pink");
const formInscription = document.querySelector(".unlogged-form");
const allInputs = document.querySelector(".unlogged_input");

const formPassword = document.querySelector(".unlogged-input-pwd");

// When the user clicks on the button or link, "Connexion"
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
formInscriptionBtn.addEventListener("click", checkFormOpenNewWidows);

function checkFormOpenNewWidows (boolean){
    let result = formInscription.checkValidity();
    if(result && password){
        window.open("index2.html", "_self");
        stockPersonalInfos();   
    } else if (!password){
        // Ici on va affciher un message au niveau de mdp 
        // "Le mot de passe doit ..."
    }  
     
}

formPassword.addEventListener("keyup",() => {
    let lengthPassword = formPassword.value.length > 8 ? true:false;
    let checkPassword = password.value;
})


function stockPersonalInfos (){
    localStorage.setItem("Prenom",formInscription[0].value);
    localStorage.setItem("Nom",formInscription[1].value);
    localStorage.setItem("Email",formInscription[2].value);
    localStorage.setItem("Pseudo",formInscription[3].value);
    localStorage.setItem("mdp",formInscription[4].value);
    localStorage.setItem("Genre",formInscription[6].value);
    localStorage.setItem("Age",formInscription[7].value);
}

