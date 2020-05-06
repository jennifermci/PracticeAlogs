var defangIPaddr = function(address) {
    var arr = address.split(".")
    var string = arr.join("[.]")
    return string;
};

//Jewels and Stones:
var numJewelsInStones = function(J, S) {
    
    var counter = 0;
    
    for(var i = 0; i<J.length; i++){
        
        for(var z = 0; z < S.length; z++){
            
            if(J[i] == S[z]){
                counter ++;
            }
            
        }
        
    }
    
    return counter;
};


//Steps to Zero
var numberOfSteps  = function(num) {
    
    var counter = 0;
    
    while(num != 0){
        if(num % 2 == 0){
            num = num/2;
            counter++;
        }else {
            num--;
            counter++;
        }
    }
    return counter;
};
