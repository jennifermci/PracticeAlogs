var balancedStringSplit = function(s) {
    var counter=0;
    var tempR =0;
    var tempL=0;
    for(var i=0; i<s.length; i++){
        if(s[i] == "R"){
            tempR++
        }
        if(s[i] == "L"){
            tempL++
        }
        if(tempR == tempL){
            counter++
        }
        
    }
    return counter;
    
};

var findNumbers = function(nums) {
    var counter = 0;
    for(var i=0; i<nums.length; i++){
        var n = nums[i].toString();
        if(n.length%2 == 0){
            counter++;
        }
                
    }
    return counter;
};

var createTargetArray = function(nums, index) {
    var targetArr=[];
    for(var i=0; i<nums.length; i++){
        
        if(targetArr[index[i]] != null){
            for(var x=index[i+1]; x<=targetArr.length; x++){
                
                if(targetArr[x+1] == null){
                    targetArr[x+1] = targetArr[x];
                    break;
                }

                var temp = targetArr[x]
                targetArr[x] = targetArr[x-1];

            }

        }

        targetArr[index[i]]=nums[i];

    }
    return targetArr;
};