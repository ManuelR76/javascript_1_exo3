var lastName = prompt("Veuillez saisir votre prénom");//déclaration de la variable prénom//
var regexLastName = /^[a-zA-ZÂ-ÿ]+$/;//La variable doit être composé de lettres seulement//

if (regexLastName.test(lastName)){//Conditions//
  alert("Bienvenue " + lastName);
} else {
  alert("Nom non valide");
}
