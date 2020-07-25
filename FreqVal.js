var decompressRLElist = function(nums) {
    var output = [];
    
    for(var i=0; i<nums.length-1; i = i+2){
        var val = i+1;
        for(var x=0; x<nums[i]; x++){
            output.push(nums[val]);
        }
    }
    return output;
};