
addEventListener("keyup",function(keyz){
if(authorizedMovement== true){ //mouvement autorisé si le combat à mort n'a pas commencé une fois que le combat
                                // commence authorizedMovement passe à false et impossible de bouger

    if (moveCount<3){ // MoveCount vaut 0 au début et chaque personnage dispose de 3 mouvements si il en effectue  1 moveCount vaut +1
        moveCount++   

    if(keyz.keyCode==37 && Blockleft.onBlock()===true &&fightLeft.letsFight()===true){ 
        var moveLeft = new Movement(10);// condition pour autorisé le mouvement si le personnage n'est pas sur un block est vivant et pas en combat
         moveLeft.letsMove();
    }
    if(keyz.keyCode==39 && BlockRight.onBlock()===true && fightRight.letsFight()===true ){
        var moveRight = new Movement(-10);
        moveRight.letsMove();     
    }
    if(keyz.keyCode==38 && BlockDown.onBlock()===true&& fightUp.letsFight()===true){
        var moveUp= new Movement(1)
        moveUp.letsMove()
    }
    if (keyz.keyCode==40 && BlockUp.onBlock()===true&& fightDown.letsFight()===true) {
        var moveDown = new Movement(-1);
        moveDown.letsMove();
    }
   }
  
   if(keyz.keyCode==13 && moveCount>0||moveCount===3){ // si le personnage 1 effectue plus de 3 mouvements c'est au tour du personange 2 de jouer
        moveCount=0;                                   // on peut aussi passé son tour en appuyant sur la touche entrée
        warriorTab.reverse();
        style.reverse();   
    }
}








var samouraiHealth = $('#samouraiHealth');
samouraiHealth.html(samourai.health);
var samouraiDamage = $('#samouraiDamage');
samouraiDamage.html(samourai.damage);
var warriorHealth =$("#warriorHealth");
warriorHealth.html(guerrier.health);
var warriorDamage = $("#warriorDamage");
warriorDamage.html(guerrier.damage);
})
