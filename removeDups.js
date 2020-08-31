var removeDuplicates = function(S) {
    var arr = S.split("");
    
    //for(var i=0; i<arr.length; i++){
    var i = 0;
    while(i < arr.length){
        
        if(arr[i] == arr[i+1]){

            arr.splice(i, 2);
            i = 0;
        }
        else{
            i++
        }

        
        
    }
        
    return arr.join("");
    
};