var samourai ={name : "Samouraï",health : 100, damage:10};
var guerrier ={name : "Guerrier",health : 100, damage:10};
var Guerre={
name : ["axeStyle", "stickerStyle","hammerStyle" ,"swordStyle"],
damage : [25,20,15,30]
}
var WeaponList = ["Hache d'Odin", "Groupillon","Marteau de Thor","Épée de Belzebuth"];
var poz =[];
var zarmy=[];
var takeWeapon = [];
var tabFantassin=[];
var tabSamourai= [];
var playerToMoveIndex=1 ;
var style = ["Fantassin","Samourai"];
var moveCount=3;
var block = new Audio ();
block.src ="audio/block.mp3";
var attackSword = new Audio() ;
attackSword.src= "audio/sword.mp3";
var findHealth =new Audio();
findHealth.src ="audio/health.mp3";
var findWeapon = new Audio();
findWeapon.src="audio/itemfound.mp3";
var authorizedMovement= true;




class Movement {
    constructor (value){ // la valeur qui va nous permettre de gérer le deplacement
        this.value=value; // si la valeur vaut -10 il se déplace à gauche +10 a droite -1 en haut +1 en bas
    }
    letsMove(){
        secondWeapon.dropWeapon();
        var warriorPosition = warriorTab[0]; 
        var warriorString = warriorPosition.toString();
        var warriorPositionPrevious = warriorPosition;
        console.log(warriorPosition)

        var outOfRange = false;
        warriorPosition-=this.value;
        if(warriorPosition<10){
            warriorPosition= String(0)+warriorPosition;
        }
        var weaponPosition = weaponTab.indexOf(warriorPosition.toString());
        if (weaponPosition!==-1){
            $('#'+warriorPosition).removeClass("axeStyle hammerStyle stickerStyle swordStyle armorStyle");
        } // si le personnage ramasse une arme on la retire de la carte
     
       if(warriorPosition>=100){ // le tableau vaut 100 si le joueur fait un mouvement qui est supérieur à cette valeur ou inferieur à 0
            outOfRange=true;     // il recevera cette alerte et ne pourra bien-sur pas avancer
            alert("Vous ne pouvez pas quittez l'arène !");
        }
        if (isNaN(warriorPosition)){
            outOfRange=true;
            alert("Vous ne pouvez pas quittez l'arène !");
        }
        if(outOfRange===false){
            $('#'+warriorPositionPrevious).removeClass(style[0]); // si le personnage n'est pas hors zone on autorise le déplacement 
            $('#'+warriorPosition).addClass(style[0]);              //en supprimant le style de l'ancienne position ajoutant le style sur la nouvelle 
            warriorTab.splice(0,1,warriorPosition);                 // et on modifie les coordonnées du tableau
        } 






        var warriorY=warriorString.charAt(1);

        if (warriorY=="0" && this.value==+1 && outOfRange===false){
            $('#'+warriorPosition).removeClass(style[0]);
            warriorPosition=parseFloat(warriorPosition)+1;
            $('#'+warriorPosition).addClass(style[0]);
            warriorTab.splice(0,1,warriorPosition);
            alert("Vous ne pouvez pas quittez l'arene !");
        }
       if (warriorY==="9"&& this.value==-1){
            $('#'+warriorPosition).removeClass(style[0]);
            warriorPosition=parseFloat(warriorPosition)-1;
            $('#'+warriorPosition).addClass(style[0]);
        }     
        if (warriorY==="9"&& this.value==-1){
            if(warriorPosition<10){
            warriorPosition= String(0)+warriorPosition;
            }
            $('#'+warriorPosition).removeClass(style[0]);
            alert("Vous ne pouvez pas quittez l'arene !");
            warriorTab.splice(0,1,warriorPosition);
            $('#'+warriorPosition).addClass(style[0]);
        }     


        var takeAxe= weaponTab[0].indexOf(warriorPosition); // la variabile takeAxe va nous permettre de savoir grâce a 
        var takeSticker= weaponTab[1].indexOf(warriorPosition);// la fonction indexOf() si le joueur ramasse une arme
        var takeHammer= weaponTab[2].indexOf(warriorPosition);
        var takeSword= weaponTab[3].indexOf(warriorPosition);
        var takeArmor= weaponTab[4].indexOf(warriorPosition);
        var arme = [];
        var getWeapon = [];
        
        if(takeAxe!==-1){ // lorsque le joueur ramasse une arme il reçoit cette alerte augmente ses dégats et un petit son s'éxecute
            findWeapon.play();
            getWeapon.splice(0,1,weaponTab[0]);
            weaponTab.splice(0,1,arme);
            alert("Vous avez ramassez la Hache de Odin vous bénéficiez de 25 de dégats!");
            zarmy.push('axeStyle');
            if(style[0]=="Fantassin"){  
                guerrier.damage=25;
                tabFantassin.push('axeStyle')
            }
            else if (style[0]=="Samourai"){
                samourai.damage=25;
                tabSamourai.push('axeStyle');
            }                   
       };
          if(takeSticker!==-1){
            getWeapon.splice(1,0,weaponTab[1]);
            arme.push(getWeapon);
            findWeapon.play();
            alert("Vous avez ramassez le Goupillon vous bénéficiez de +15 de dégats !");
            zarmy.push('stickerStyle');
            weaponTab.splice(1,1,arme);
            if(style[0]=="Fantassin"){
                guerrier.damage=15;
                tabFantassin.push('stickerStyle');
            }
            else if (style[0]=="Samourai"){
                samourai.damage=15;
                tabSamourai.push('stickerStyle')
            }
        };
         if(takeHammer!==-1){
            getWeapon.splice(1,0,weaponTab[2]);
            findWeapon.play();
            alert("Vous avez ramassez le Marteau de Thor vous bénéficiez de 20 de dégats!");
            weaponTab.splice(2,1,arme);
            zarmy.push("hammerStyle");
            if(style[0]=="Fantassin"){
            guerrier.damage=20;
            tabFantassin.push('hammerStyle');
            }
            else if (style[0]=="Samourai"){
            samourai.damage=20;
            tabSamourai.push('hammerStyle');
            }
        };
        
        if(takeSword!==-1){
            getWeapon.splice(1,1,weaponTab[3]);
            findWeapon.play();
            weaponTab.splice(3,1,arme);
            console.log(getWeapon)
            zarmy.push("swordStyle")
            alert("Vous avez ramassez l'Epée de Belzebuth vous bénefeciez 30 de degats !");
            if(style[0]=="Fantassin"){
            guerrier.damage=30;
            tabFantassin.push('swordStyle')
            }
            else if (style[0]=="Samourai"){
            samourai.damage=30;
            tabSamourai.push('swordStyle')
            }
        };
        
        if (takeArmor!==-1){
            findHealth.play();
            weaponTab.splice(4,1,arme);
            alert("Vous avez rammassez le bouclier légendaire, vous béneficiez de +20 en santé");
            if(style[0]=="Fantassin"){
            guerrier.health+=20;
            }
            else if (style[0]=="Samourai"){
            samourai.health+=20;
            };              
        }
    }     
}