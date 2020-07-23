var smallerNumbersThanCurrent = function(nums) {
    var output = [];
    
    
    for(var i=0; i<nums.length; i++){
        var count = 0;
        for(var j=0; j<nums.length; j++){
            
            if(nums[j] < nums[i]){
                count++
            }
        }
        output.push(count);
    }
    return output;
};