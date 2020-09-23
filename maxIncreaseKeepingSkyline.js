var maxIncreaseKeepingSkyline = function(grid) {
    let columnMax = findColumnMax(grid);
    let rowMax = findRowMax(grid);
    let count = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (columnMax[col] > rowMax[row]) {
                count += rowMax[row] - grid[row][col];
            } else {
                count += columnMax[col] - grid[row][col];
            }
        }
    }
    return count;

};

function findColumnMax(grid) {
    let arr = [];
    for (let i = 0; i < grid.length; i++) {
        arr.push(getCol(grid, i))
    }
    return findRowMax(arr)
}

function getCol(matrix, col){
      var column = [];
      for(var i=0; i<matrix.length; i++){
         column.push(matrix[i][col]);
      }
      return column;
}

function findRowMax(grid) {
    let arr = [];
    for (let i = 0; i < grid.length; i++) {
        let max = grid[i][0];
        for (let j = 0; j < grid[i].length; j++) {
            if (max < grid[i][j]) {
                max = grid[i][j]
            }
        }
        arr.push(max)
    }
    return arr;
}