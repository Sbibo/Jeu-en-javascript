class Map{
    constructor(rows,cols){
        this.rows=rows;
        this.cols=cols;
    }
     init (){
        var table =""
        for (var r=0;r<this.rows;r++){
            table += "<tr>"; 
             for (var c= 0; c<this.cols;c++)
             {
             var id = String(c)+String(r);
            table +="<td id='"+id+"'></td>"; // donner un Identifiant à chaque case de la map
             }
             table +="</tr>";
         }
        var tableau = "<table id='map'>"+ table + "</table>";
        document.getElementById("container").innerHTML = tableau ;
    }    
}
var map = new Map(10,10) //initialiser la map avec 10 rangées et 10 colonnes 
map.init()
