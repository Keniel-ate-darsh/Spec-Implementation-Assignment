
class Grid {
    
    constructor(){
        this.height = document.getElementById("height")
        this.length1 = document.getElementById("length")
        this.grid = document.createElement("table")
        this.btn = document.getElementById("myForm")
        this.btn.addEventListener("submit", (event) => {
            event.preventDefault();
            this.createGrid();
            this.markEnd();
            this.markStart();
            //this.BFS();
        })
        this.startX = document.getElementById("startX")
        this.startY = document.getElementById("startY")
        this.endX = document.getElementById("endX")
        this.endY = document.getElementById("endY")
        this.startCoord = [Number(startX), Number(startY)]
        this.endCoord = [Number(endX), Number(endY)]
        this.visited = []
        this.path = []
        this.prime = {}
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
        this.grid.rows[this.startY.value-1].cells[this.startX.value-1].id = "start"
    }
    markEnd(){
        this.grid.rows[this.endY.value-1].cells[this.endX.value-1].id = "end"
    }
    BFS(){
        while(true){
            // 4 trys 4 ifs -> 1 try 1 if
            //If after Try to see if end goal is in visited[]
            //in each if check if visited, if wall
            //If true add add border of cell to path note down child and parent relationship in prime{} and change the color of cell youre in USE UNSHIFT
            //At the end remove the last thing in path ex: pop
        }
    }
};
let Gridfunc = new Grid();