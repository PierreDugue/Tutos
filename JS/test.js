var Personnage = {
    // Initialise le personnage
    init: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    },

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};


var testFunc = function (perso){
    perso.nom =  "TEST";
    perso.sante = 444;
}
var testFunc = function (perso){
    perso.force =  555;
    perso.xp = 112;
}

var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25);

testFunc(perso1);



var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());