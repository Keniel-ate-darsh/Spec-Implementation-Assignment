
class Grid {
    
    constructor(){
        this.height = document.getElementById("height")
        this.length1 = document.getElementById("length")
        this.grid = document.createElement("table")
        this.btn = document.getElementById("myForm")
        this.btn.addEventListener("submit", (event) => {
            event.preventDefault();
            this.createGrid();
        })
        this.startX = document.getElementById("startX")
        this.startY = document.getElementById("startY")
        this.endX = document.getElementById("endX")
        this.endY = document.getElementById("endY")
    }

    createGrid() {
    this.grid.innerHTML = "";
    let h = Number(this.height.value)
    let l = Number(this.length1.value)

    for(let y = 0; y < h; y++){
        let row = document.createElement("tr")
        for(let x = 0; x < l; x++){
            let newCell = document.createElement("td")
            row.appendChild(newCell)
        }
        this.grid.appendChild(row)
        }
    document.body.appendChild(this.grid);
    }
    markStart(){
        this.row[y].newCell[x].id="start"
    }
    markEnd(){
        this.row[y].newCell[x].id="end"
    }
};
let Gridfunc = new Grid();
// document.getElementById("myForm").addEventListener("submit", function(event){
//     event.preventDefault();
//     Gridfunc
// })