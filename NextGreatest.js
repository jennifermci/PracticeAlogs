var replaceElements = function(arr) {
    
    for(let i=0; i<arr.length; i++){
        let max = 0;
        for(let x=i+1; x<arr.length; x++){
            
            if(max < arr[x]){
                max = arr[x];
            }
        }
        if(i == arr.length-1){
            arr[i] = -1;
        }
        else{
            arr[i] = max;               
        }


        
    }
    arr[arr.length-1] = -1;
    return arr;
};