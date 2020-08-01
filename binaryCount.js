var binaryGap = function(N) {
    var string = N.toString(2)
    var max = 0
    if(string.length == 1){
        return 0;
    }
    
    for(var i=0; i<string.length; i++){
        var count = 1
        var temp = i+1
        if(string[i]==1){
            while(string[temp] != "1" && temp < string.length){
                count++
                temp++
            }
            if(temp == string.length && string[temp-1] == "0"){
                break;
            }
            if(count > max){
                console.log(count)
                max = count
            }
            
        }
        
    }
    return max;
};