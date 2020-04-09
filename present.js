var monBt1 = document.getElementById("bt1");
monBt1.addEventListener("click", function () {
    affichageMode("Desktop");
    return;
});
var monBt2 = document.getElementById("bt2");
monBt2.addEventListener("click", function () {
    affichageMode("Pad");
    return;
});
var monBt3 = document.getElementById("bt3");
monBt3.addEventListener("click", function () {
    affichageMode("PadMax");
    return;
});
var monBt4 = document.getElementById("bt4");
monBt4.addEventListener("click", function () {
    affichageMode("Mobile");
    return;
});
function affichageMode(monType) {
    var modAffichage = document.getElementById("typeAffichage");
    modAffichage.className = monType;
    return;
}