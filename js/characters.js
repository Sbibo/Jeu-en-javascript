var warriorTab=[]; 

class Fighter {
    constructor(style){
        this.style=style
    }
    character (){
        for (var i=0;i<1;i++){
            do{
            var rows = document.getElementById("map").rows; // déclare les rangées
            var y=Math.floor(Math.random()*rows.length); // choisis aléatoirement une RANGER de l'axe Y
            var cols = document.getElementById("map").rows[y].cells; // déclare les colonnes
            var x=Math.floor(Math.random()*cols.length); // choisis aléatoirement une COLONNE de l'axe X
            var id = String(x)+String(y);
            var valeur = warriorTab.indexOf(id); // Permet de ne pas génerer les personnages au même endroit
            var nouvelleValeur = blockTab.indexOf(id); // permet de ne pas génerer les personnages sur les blocks
            var weaponvaleur = weaponTab.indexOf(id);
                
                if (valeur===-1 && nouvelleValeur ===-1 && weaponvaleur===-1){
                    cols[x].classList.add(this.style);
                    warriorTab.push(id);
                }
            }while(valeur!==-1 || nouvelleValeur!==-1 || weaponvaleur!==-1);
        }
    }
}

var fantassin= new Fighter("Fantassin"); // permet de génerer le personnage Fantassin
var samourai= new Fighter ("Samourai");
fantassin.character();
samourai.character();
