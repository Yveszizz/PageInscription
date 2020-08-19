
const topBarLoginBtn = document.getElementById("topbar-login-button");
const loginLink = document.querySelector("#login-link");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const formInscriptionBtn = document.querySelector(".unlogged-btn-pink");
const formInscription = document.querySelector(".unlogged-form");
const allInputs = document.querySelector(".unlogged_input");

const formPassword = document.querySelector(".unlogged-input-pwd");

// Modal
const modal = document.getElementById("myModal");
const loginModalBtn =  document.querySelector("#modal-login-button");
const mdpModalInput = document.querySelector(".modal-unlogged-pwd");
const mailModalInput = document.querySelector(".modal-unlogged-email");

//let lengthPassword = false;
// When the user clicks on the button or link, "Connexion"
topBarLoginBtn.addEventListener("click", openModal);
loginLink.addEventListener("click", openModal);
formPassword.addEventListener("keyup", checkPassword);
formInscriptionBtn.addEventListener("click", checkFormOpenNewWidows);
loginModalBtn.addEventListener("click", login);

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
function checkFormOpenNewWidows (boolean){
    let result = formInscription.checkValidity();
    if(result && checkPassword()){
        window.open("index2.html", "_self");
        stockPersonalInfos();
    } /*else if (valid == false){
        // Ici on va affciher un message au niveau de mdp 
        // "Le mot de passe doit ..."
        console.log("mdp trop petit je crois");
    }  */
}
                              
function checkPassword() {
    const regex =/\d/;
    lengthPassword = formPassword.value.length > 7 ? true:false;
    difficile = regex.test(formPassword.value);
    let valid =  difficile && lengthPassword  === true? true:false;
    console.log(valid);
    return valid;  
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

function login () {
    if(mailModalInput){
        console.log(mailModalInput.value);
       }
   
}