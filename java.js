
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
            
            this.BFS();
            this.showPath();
        })
        this.startX = document.getElementById("startX")
        this.startY = document.getElementById("startY")
        this.endX = document.getElementById("endX")
        this.endY = document.getElementById("endY")
        this.startCoord = [Number(startX.value)-1, Number(startY.value) -1]
        this.endCoord = [Number(endX.value) -1 , Number(endY.value)  -1]
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
        this.startCoord = [Number(this.startX.value), Number(this.startY.value)];
        this.endCoord = [Number(this.endX.value), Number(this.endY.value)];
        this.path = [this.startCoord]; // This is your Queue
        this.visited = [[this.startCoord[0], this.startCoord[1]]];
        this.prime = {};
        while(this.path.length > 0){
            if (this.checkVisited(this.endCoord[0], this.endCoord[1])){
            break;
        }
            try{
                if(!this.checkVisited(this.path[this.path.length-1][0], this.path[this.path.length-1][1])){
                    this.prime[[this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1]);
                    this.visited.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] - 1]);
                    this.grid.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }
            } catch (error) {}

            try {
                if (!this.checkVisited(this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1)) {
                    this.prime[[this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1]);
                    this.visited.unshift([this.path[this.path.length-1][0], this.path[this.path.length-1][1] + 1]);
                    this.grid.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }
            } catch (error) {}

            try {
                if (!this.checkVisited((this.path[this.path.length-1][0] - 1), this.path[this.path.length-1][1])){
                    this.prime[[this.path[this.path.length-1][0] - 1, this.path[this.path.length-1][1]]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0] - 1, this.path[this.path.length-1][1]]);
                    this.visited.unshift([this.path[this.path.length-1][0] - 1, this.path[this.path.length-1][1]]);
                    this.grid.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }       

            } catch (error) {}
            try {
                if (!this.checkVisited(this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1])) {
                    this.prime[[this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]]] = [[this.path[this.path.length-1][0], this.path[this.path.length-1][1]]];
                    this.path.unshift([this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]]);
                    this.visited.unshift([this.path[this.path.length-1][0] + 1, this.path[this.path.length-1][1]]);
                    this.grid.rows[this.path[this.path.length-1][1]-1].cells[this.path[this.path.length-1][0]-1].style.backgroundColor = "lightgreen";
                }
            } catch (error) {}
            
            this.path.pop();
            
            if (this.checkVisited(this.endCoord[0], this.endCoord[1])) {
                break;
            }
        }
            
            // 4 trys 4 ifs -> 1 try 1 if
            //If after Try to see if end goal is in visited[]
            //in each if check if visited, if wall
            //If true add add border of cell to path note down child and parent relationship in prime{} and change the color of cell youre in USE UNSHIFT
            //At the end remove the last thing in path ex: pop
        }
    showPath(){
        let path = [];
        let current = this.end;
        while (true) {
            try {
                path.unshift(this.prime[[current[0], current[1]]][0]);
                current = this.prime[[current[0], current[1]]][0];
            } catch (error) {
                break;
            }
            const displayPath = setInterval(() => {
            if (path.length == 0) {
                clearInterval(displayPath);
                return;
            }
            this.grid.rows[path[0][1]-1].cells[path[0][0]-1].style.backgroundColor = "darkgreen";
            this.grid.rows[this.start[1]-1].cells[this.start[0]-1].style.backgroundColor = "yellow";
            path.shift();
        
            }    , 100);

    }
    }

    checkVisited(x,y) {
        for(let i = 0; i< this.visited.length; i++) {
            if(x == this.visited[i][0] && y == this.visited[i][1]){
                return true;
            }
        }
        return false;
    }
}
let Gridfunc = new Grid();