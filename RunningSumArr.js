var runningSum = function(nums) {
    var newArr = [];
    var Sum = 0;
    for(var i=0; i<nums.length; i++){
        
        Sum = Sum + nums[i];
        newArr.push(Sum);
        
    }
    return newArr;
};