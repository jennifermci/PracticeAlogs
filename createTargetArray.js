var createTargetArray = function(nums, index) {
    var target = [];
 
    for(var i=0; i<nums.length; i++){
        if(target[index[i]] == null){
            target[index[i]] = nums[i];
        }
        else{
            target.splice(index[i], 0, nums[i]);
        }

    }
    return target;
};