var countPrimeSetBits = function(L, R) {
    var count = 0;
    
    
    for(var i=L; i<=R; i++){
        var eachCount = 0;
        var num = (i >>> 0).toString(2)
        
        for(var x=0; x<num.length; x++){
            if(num[x] == 1){
                eachCount++
            }
        }
        
        if(eachCount == 1){
            continue;
        } else if(eachCount == 2){
            count++
            continue
        }
        
        var bool = true
        for(var z=2; z < eachCount; z++){
            if(eachCount % z == 0){
                bool = false
            }
        }
        if(bool){
            count++
        }
        
    }
    
    
    return count;
    
};
