var shuffle = function(nums, n) {
    var arr1 = [];
    var arr2 = [];
    var output = [];
    for(var i=0; i<n; i++){
        arr1.push(nums[i]);
    }
    for(var i=n; i<nums.length; i++){
        arr2.push(nums[i]);
    }
    for(var i=0; i<arr1.length; i++){
        output.push(arr1[i]);
        output.push(arr2[i]);

    }
    return output;
};