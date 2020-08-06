var countGoodTriplets = function(arr, a, b, c) {
    var count = 0;
    
    for(var i=0; i<arr.length-2; i++){
        
        for(var j=i+1; j<arr.length-1; j++){
            var first = Math.abs(arr[i] - arr[j]);
            if(first <= a ){

                for(var k=j+1; k<arr.length; k++){
                    
                    var second = Math.abs(arr[j] - arr[k]);
                    var third = Math.abs(arr[i]- arr[k]);
                    if(second <= b && third <=c){

                        count++
                    }
                }
            }           
        }
    }
    return count;
};