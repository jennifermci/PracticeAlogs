var toLowerCase = function(str) {
    var lower = "";
    for(i=0; i<str.length; i++){
        
        lower = lower + str[i].toLowerCase();
    }
    return lower;
    
};

//Odd Counter

var oddCells = function(n, m, indices) {
    var arr = []
    var matrix = []
    for (i=0; i<m; i++){
        arr.push(0);
    }
    for (x=0; x<n; x++){
        matrix.push(arr);
    }
    for(j=0; j<indices.length; j++){
        var row = indices[j][0]
        var col = indices[j][1]
        for (var Q=0; Q<matrix.length; Q++){
            if(Q == row){
               for(var R=0; R<matrix[Q].length; R++){
                   matrix[Q][R] = matrix[Q][R]+1;
               } 
            }


        }
        matrix[j][col] = matrix[j][col]+1;   
        
    }
    var OddCounter = 0;
    for(var Z=0; Z<matrix.length; Z++){
        for(var J=0; J<matrix[Z].length; J++){
            console.log(matrix[Z][J])
            if(matrix[Z][J] % 2 !== 0){
                
                OddCounter = OddCounter+1;
            }
        }
    }
    return OddCounter;
};