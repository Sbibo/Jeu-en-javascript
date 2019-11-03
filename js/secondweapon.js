class SecondWeapon {
    dropWeapon(){
            var warriorPosition=warriorTab[0];
            var warriorLocation =  document.getElementById(warriorTab[0]) //coordoonée de location du joueur
            var nameWeapon= Guerre.name;
            var indexWeapon1 = nameWeapon.indexOf(tabFantassin[0]);
            var indexWeapon2 = nameWeapon.indexOf(tabSamourai[0]);

            if(tabFantassin.length>=2 && tabFantassin[0]===Guerre.name[indexWeapon1] && style[0]=="Fantassin" ){
             //si le personnage ramasse une deuxieme arme il dépose la premiere à sa position actuelle et garde seulement la derniere arme
            var locToString= warriorLocation.id.toString() ;
            var warName = Guerre.name;
            var Zwarmy = warName.indexOf(tabFantassin[0]);
            weaponTab[Zwarmy]=locToString
            warriorLocation.classList.add(tabFantassin[0]) // ajout de la classe css d'armes lorsque le joueur se trouve sur la 2 eme armes.
            tabFantassin.splice(0,1);
            guerrier.damage-Guerre.damage[indexWeapon1];
            takeWeapon.push(warriorPosition);
            takeWeapon.indexOf(warriorPosition);

            if(takeWeapon!==-1){ 
            alert('Vous avez ramassez une deuxieme arme vous laissez donc votre' +" "+WeaponList[indexWeapon1]+" "+ "à votre position");}         
            }

            else  if(tabSamourai.length>=2 && tabSamourai[0]===Guerre.name[indexWeapon2] && style[0]=="Samourai"){
            var locToString2= warriorLocation.id.toString() ;
            warName = Guerre.name;
            var Ywarmy = warName.indexOf(tabSamourai[0]);
            weaponTab[Ywarmy]=locToString2;
            warriorLocation.classList.add(tabSamourai[0]) // ajout de la classe css d'armes lorsque le joueur se trouve sur la 2 eme armes.
            tabSamourai.splice(0,1);// quand il repasse dans la location warrior location qu'il retire la class list warmy[0]
            guerrier.damage-Guerre.damage[indexWeapon2];
            takeWeapon.push(warriorPosition);
            takeWeapon.indexOf(warriorPosition);                 
            if(takeWeapon!==-1){alert('Vous avez ramassez une deuxieme arme vous laissez donc votre' +" "+WeaponList[indexWeapon2]+" "+ "à votre position");} 
            }

            var tableau = [];
            tableau.push(warriorPosition);
       
    }
}
var secondWeapon = new SecondWeapon();