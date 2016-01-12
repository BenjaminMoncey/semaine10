var bouton = document.getElementById('bouton');
var multiplicateur = document.getElementById('multiplicateur');
var affichage = document.getElementById('affichage');
var score = 0;
var compteur = 1;
var prix = function () {
    return 50 * compteur;
};
var afficherScore = function () {
    if (score < 2) {
        affichage.innerHTML = score + " cookie";
    } else {
        affichage.innerHTML = score + " cookies";
    }
};

bouton.addEventListener('click', function () {
    score += 1;
    score = score + compteur - 1;
    afficherScore();
}, false);

var autoclick = function () {
    if (score >= 200) {
        score += 1;
        afficherScore();
    }
};

setInterval(autoclick, 1000);

var incrementer = function () {
    if (score >= prix()) {
        score -= prix();
        compteur += 1;
        afficherScore();
        multiplicateur.innerHTML = "Multiplicateur x" + compteur + " - prochain prix = " + prix();
    } else {
        alert("Pas assez de cookies !");
    }
};

multiplicateur.addEventListener('click', incrementer, false);