class BlockLoc{
    constructor(value){
    this.value=value;
    }
    onBlock (){      
    var warriorPosition = warriorTab[0];
    warriorPosition=parseFloat(warriorPosition) +this.value;
    if (warriorPosition<10){
        warriorPosition=String(0)+warriorPosition.toString();
    }
    if(blockTab.toString().indexOf(warriorPosition)!==-1){ // si le personnage est sur un block alors il reçoit une alerte et il ne peut pas effectuer le mouvement
        block.play();
        alert("Vous ne pouvez pas franchir les blocks !");
    return false ;
    }
    return true ;

    }
}
var Blockleft = new BlockLoc(-10);
var BlockRight = new BlockLoc(10);
var BlockUp= new BlockLoc(1);
var BlockDown = new BlockLoc(-1);
