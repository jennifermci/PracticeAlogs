var nextGreaterElement = function(nums1, nums2) {
    
    for(var i=0; i< nums1.length; i++){
        var bool = false;
        var bool2 = false
        for(var x=0; x< nums2.length; x++){
            
            if(nums1[i] == nums2[x]){
                bool = true
                continue;
            }
            
            if(bool == true && nums1[i] < nums2[x]){
                bool2 = true
                nums1[i] = nums2[x]
                break;
            }
        }
        if(bool == false || bool2 == false){
               nums1[i] = -1 
        }
    }
    return nums1;
};
