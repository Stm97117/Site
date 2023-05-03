const bouton = document.getElementById("bouton");
const liste = document.getElementById("liste");

bouton.addEventListener("click", function() {
  if (liste.style.display === "none") {
    liste.style.display = "block";
    bouton.innerHTML = "Masquer la liste";
  } else {
    liste.style.display = "none";
    bouton.innerHTML = "Afficher la liste";
  }
});