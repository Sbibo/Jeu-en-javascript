var defenseGuerrier=["attaque","defense"];
var defenseSamourai =["attaque","defense"];
var samButton = document.getElementById("sam");
samButton.style.visibility='hidden';
var fanButton =document.getElementById("fan");
fanButton.style.visibility='hidden';
var samAttack = document.getElementById("SamAttack");
var fanAttack=document.getElementById("FanAttack");
var samDef=document.getElementById("SamDef");
var fanDef=document.getElementById("FanDef");
var ealth = $('#samouraiHealth');
var samouraiDamage = $('#samouraiDamage');
samouraiDamage.html(samourai.damage)
var warriorHealth =$("#warriorHealth");
warriorHealth.html(guerrier.health);
var warriorDamage = $("#warriorDamage");
warriorDamage.html(guerrier.damage);
var samouraiHealth = $('#samouraiHealth');
samouraiHealth.html(samourai.health);


class Fight {
    constructor(value){
        this.value=value;
}
    letsFight(){    
            var damageSamourai = [samourai.damage/2,samourai.damage];
            var damageGuerrier = [guerrier.damage/2,guerrier.damage];
            var warriorPosition = warriorTab;
            warriorPosition=parseFloat(warriorPosition)+ this.value;  
            samAttack.onclick= function(){  
                if(defenseGuerrier[0]==="defense"){
                    alert("Vous attaquez votre énnemi et infligé " +damageSamourai[0]+ " de degats");
                    alert("Il reste " + (guerrier.health-=damageSamourai[0]) +" points de vies à Guerrier");
                    warriorHealth.html(guerrier.health);
                    warriorTab.reverse();
                    style.reverse();
                    defenseGuerrier.reverse();   
                    attackSword.play();
                }
                else if (defenseGuerrier[0]==="attaque"){
                    alert("Vous attaquez votre énnemi et infligé " +damageSamourai[1]+ " de degats");                    
                    alert("Il reste " + (guerrier.health-=damageSamourai[1]) +" points de vies à Guerrier");
                    warriorHealth.html(guerrier.health);
                    warriorTab.reverse();
                    style.reverse();
                    attackSword.play();
                }  
                    samButton.style.visibility='hidden';
                    fanButton.style.visibility='visible';

                    if(guerrier.health<=0||samourai.health<=0){
                        fanButton.style.visibility='hidden';
                        samButton.style.visibility='hidden';
                        $('#'+warriorPosition).removeClass(style);
                        alert("Le Samouraï remporte la partie  relancez le jeu pour rejouer !");
                    }
                    } 

                samDef.onclick= function(){
                    alert("Vous choississez la défense vous subirez 50% de dégats en moins au prochain tour");
                    defenseSamourai.reverse();
                    warriorTab.reverse();
                    style.reverse();
                    samButton.style.visibility='hidden';
                    fanButton.style.visibility='visible';
                }

                fanAttack.onclick= function(){
                    if(defenseSamourai[0]==="defense"){
                        alert("Vous attaquez votre énnemi et infligé " +damageGuerrier[0]+ " de degats");
                        alert("Il reste " + (samourai.health) +" points de vies à Samouraï");
                        warriorTab.reverse();
                        style.reverse();
                        defenseSamourai.reverse();
                        attackSword.play();  
                        samouraiHealth.html(samourai.health-=damageGuerrier[0]);
                }
                    else if(defenseSamourai[0]==="attaque") {
                        alert("Vous attaquez votre énnemi et infligé " +damageGuerrier[1]+ " de degats");
                        alert("Il reste " + (samourai.health-=damageGuerrier[1]) +" points de vies à Samouraï");
                        samouraiHealth.html(samourai.health);
                        attackSword.play();
                        warriorTab.reverse();
                        style.reverse();
                    }
                    if (samourai.health<=0){
                        alert("Le samouraÏ est mort au combat !");
                        moveCount=0;
                        fanButton.style.visibility='hidden';
                    }
                       fanButton.style.visibility='hidden';
                       samButton.style.visibility='visible';
                       if(guerrier.health<=0||samourai.health<=0){
                        fanButton.style.visibility='hidden';
                        samButton.style.visibility='hidden';
                        $('#'+warriorPosition).removeClass(style);
                        alert("Le Guerrier remporte la partie  relancez le jeu pour rejouer !");
                       }

                    }
                
                fanDef.onclick=function(){
                    alert("Vous choississez la défense vous subirez 50% de dégats en moins au prochain tour");
                    warriorTab.reverse();
                    style.reverse();
                    defenseGuerrier.reverse();
                    fanButton.style.visibility='hidden';
                    samButton.style.visibility='visible';
                 }

                 if (warriorPosition<10){
                    warriorPosition=String(0)+warriorPosition.toString();
                }
           
                if(warriorTab.toString().indexOf(warriorPosition)!==-1 && guerrier.health >0 && samourai.health >0){
                    alert("Le " + style[0]+" commence le combat à mort !")
                    authorizedMovement=false;
                    if(style[0]==="Fantassin" && guerrier.health>=0){
                        fanButton.style.visibility='visible';
                        samButton.style.visibility='hidden';
                    }
                    else if (style[0]==="Samourai"&&samourai.health>=0){
                        samButton.style.visibility='visible';
                        fanButton.style.visibility='hidden';
                    }
                    moveCount--;
                return false ;         
                }
                return true ;  
        } 
    }

var fightDown = new Fight(1);
var fightUp = new Fight(-1);
var fightRight = new Fight(10);
var fightLeft = new Fight(-10);

$(".blockStyle").click(function(){
 alert("Vous ne pouvez pas franchir les Blocs ni les détruires !");
}) 

