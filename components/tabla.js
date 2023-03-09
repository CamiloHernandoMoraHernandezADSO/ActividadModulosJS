import formulario from "./formulario.js";
import resultados from "./resultados.js";
export default{
    name: document.querySelector("#resultados"),
    data: [],
    frag: document.createDocumentFragment(),
    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    Traditional(p1){
        this.data.Traditional.forEach((val,id)=>{
            if(p1==val){
                console.log(val[0], val[1]);
            }
        })
        
    },
    PointRange(p1){
        this.data["14-Point-Range"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWithStandard(p1){
        this.data["Proficiency-Level-With-Standard"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    Solucion(){
        let dato = formulario.data[0];
        this.data.Traditional.forEach((valor, llave)=>{
            if(dato.puntaje >= valor[0] && dato.puntaje <= valor[1]){
                this.Traditional(llave);
                this.PointRange(llave);
                this.Letter(llave);
                this.SBGRating(llave);
                this.ProficiencyLevelWithStandard(llave);
                resultados.CrearLista(llave);
            }
        })
    }
}