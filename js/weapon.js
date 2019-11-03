var weaponTab=[];

class Weapon {
    constructor(style){
        this.style=style;
    }
    getweapon(){
        do{
            var rows = document.getElementById("map").rows; // déclare les rangées
            var y=Math.floor(Math.random()*rows.length); // choisis aléatoirement une RANGER de l'axe Y
            var columns = document.getElementById("map").rows[y].cells; // déclare les colonnes
            var xx=Math.floor(Math.random()*columns.length); // choisis aléatoirement une COLONNE de l'axe X
            var id= String(xx)+String(y);
            var valeur = weaponTab.indexOf(id);
            var nouvelleValeur=blockTab.indexOf(id);
            if (valeur===-1 && nouvelleValeur===-1 ){  // permet de placer les armes si aucun autre élements n'est présent sur la case 
                weaponTab.push(id);                     //grace au tableau et à la fonction indexOf() si valeur vaut -1 alors la case est libre
                columns[xx].classList.add(this.style);
                }             
        }while (valeur!==-1 || nouvelleValeur!==-1 ); 
    }

}
var arme =new Weapon("axeStyle"); // permet de créer une nouvelle arme en lui faisant passer le style de l'arme
var arme2 =new Weapon("stickerStyle");
var arme3 =new Weapon("hammerStyle");
var arme4 =new Weapon("swordStyle");
var arme5= new Weapon("armorStyle");
arme.getweapon()
arme2.getweapon()
arme3.getweapon()
arme4.getweapon()
arme5.getweapon()

