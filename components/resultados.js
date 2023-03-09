import tabla from "./tabla.js";
export default{
    name: document.querySelector("#resultados"),
    frag: document.createDocumentFragment(),
    CrearLista(punt){
        this.frag = document.createDocumentFragment("#resultados");
        let tr = document.createElement("TR")
        let td1 = document.createElement("TD")
        let td2 = document.createElement("TD")
        let td3 = document.createElement("TD")
        let td4 = document.createElement("TD")
        let td5 = document.createElement("TD")
        let dato1 = tabla.data.Traditional[punt]
        let dato2 = tabla.data["14-Point-Range"][punt]
        console.log(JSON.stringify(dato1));
        console.log(JSON.stringify(dato2));
        td1.insertAdjacentText("beforeend", dato1)
        td2.insertAdjacentText("beforeend", dato2)
        td3.insertAdjacentText("beforeend", tabla.data.Letter[punt])
        td4.insertAdjacentText("beforeend", tabla.data["SBG-Rating"][punt])
        td5.insertAdjacentText("beforeend", tabla.data["Proficiency-Level-With-Standard"][punt])
        tr.append(td1, td2, td3, td4, td5)
        this.frag.append(tr)
        this.name.append(this.frag);
    }
}