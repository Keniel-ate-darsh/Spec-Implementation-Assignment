
const height = document.getElementById("height")
const length = document.getElementById("length")
const grid = document.createElement("table")
document.body.appendChild(grid)

function createGrid(){
    grid.innerHTML = "";
    let h = Number(height.value)
    let l = Number(length.value)

    for(let y = 0; y < h; y++){
        let row = document.createElement("tr")
        for(let x = 0; x < l; x++){
            let newCell = document.createElement("td")
            row.appendChild(newCell)
        }
        grid.appendChild(row)
    }
};
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    createGrid()
})