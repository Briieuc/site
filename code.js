var username = document.getElementByName('username');
var password = document.getElementByName('password');

if (username === "Monsieur" && password === "1234") {
    window.location.href = "example.com/new_url";
} else {
    alert("Nom ou Mot de Passe Incorrect ")
}