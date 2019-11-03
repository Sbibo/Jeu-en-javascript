var blockTab=[]
class Addblock {
    constructor(value) { // constructor qui va nous permettre de passer en valeur le nombre de block
        this.value=value 
    }
    blocks(){
        for (var z=0;z<this.value;z++){
            do{
                do{
                var rows = document.getElementById("map").rows; // déclare les rangées
                var y=Math.floor(Math.random()*rows.length); // choisis aléatoirement une RANGER de l'axe Y
                var cols = document.getElementById("map").rows[y].cells; // déclare les colonnes
                var x=Math.floor(Math.random()*cols.length); // choisis aléatoirement une COLONNE de l'axe X
                    
                 }while(x%2===0); // Pour pouvoir génerer des blocks qui ne bloqueront pas les personnages on génere les blocks
                                    // une colonne sur deux
            
                var id = String(x)+String(y);
                var valeur = blockTab.indexOf(id);
                if (valeur===-1){  // Condition pour ne pas générer un block sur l'autre
                    cols[x].classList.add("blockStyle")
                    blockTab.push(id);
                }
            }while(valeur!==-1) ;    
        }
    }
}

var block = new Addblock(10) // création de 10 blocks 
block.blocks()




