var smallerNumbersThanCurrent = function(nums) {
    
    var arr = [];
    
    for(var x = 0; x < nums.length; x++){
        var count = 0;
        for(var y=0; y < nums.length; y++){
            
            if(nums[x] > nums[y]){
                count++;
            }
            
        }
        arr.push(count);
    }
    return arr;
};


//Return compressed list
var decompressRLElist = function(nums) {
    var arr = [];
    
    for(var i=0; i< nums.length; i++){
        
        var freq = nums[2*i];
        var val = nums[2*i+1];
        
        for(var x=0; x<freq; x++){
            arr.push(val);
        }
        
    }
    return arr;
    
};

//SubtractProduectsandSums of a number
var subtractProductAndSum = function(n) {
    
    var string = n.toString();
    var arr = string.split("");
    var product = 1;
    var sum = 0;
    
    for(var x = 0; x < arr.length; x++){
        
        var num = Number(arr[x]);
        product = product * num;
        sum = sum + num;
        
    }
    
    return product - sum;
    
    
};

//Find the difference of the areas on two rectangulars
var computeArea = function(A, B, C, D, E, F, G, H) {
   
   
    if((C > 0 && A > 0) || (C < 0 && A < 0)){
        var areaTwo = Math.abs(C - A) * Math.abs(D-B);
    }
    else{
        var areaOne = (Math.abs(C) + Math.abs(A) ) * (Math.abs(D) + Math.abs(B));
    }
   
   
    if((G > 0 && E > 0) || (G < 0 && E < 0)){
        var areaTwo = Math.abs(G - E) * Math.abs(H-F);
    }
    else{
        var areaTwo = (Math.abs(G) + Math.abs(E) ) * (Math.abs(H) + Math.abs(F));
    }
   
    var overlap = 0;
    var overlapLength;
    var overlapHeight;
   
    console.log("Area One:",areaOne)
    console.log("Area Two:",areaTwo)
   
    if ((E <= C && E >= A) && ( H <= D && H >= B)){
       
        if(G<C){
            if(G<0 && E <0 || G>0 && E > 0){
                overlapLength = Math.abs(G-E)
            }
            else{
                overlapLength = (Math.abs(G) + Math.abs(E))
            }
        }
        else{
            if(E<0 && C <0 || E>0 && C > 0){
                overlapLength = Math.abs(E-C)
            }
            else{
                overlapLength = (Math.abs(E) + Math.abs(C))
            }
        }
        if(H<D){
            if(F<0 && H <0 || F>0 && H > 0){
                overlapHeight = Math.abs(F-H)
            }
            else{
                overlapHeight = (Math.abs(H) + Math.abs(F))
            }
           
        }else{
            if(B<0 && H <0 || B>0 && H > 0){
                overlapHeight = Math.abs(B-H)
            }
            else{
                overlapHeight = (Math.abs(B) + Math.abs(H))
             }
        }
        overlap = overlapHeight * overlapLength;
    }
    console.log("overlap:",overlap)
   
   
    return areaOne + areaTwo - overlap;
   
};

//second attempt

var computeArea = function(A, B, C, D, E, F, G, H) {
   
   
    if((C >= 0 && A >= 0) || (C <= 0 && A <= 0)){
        var areaOne = Math.abs(C - A) * Math.abs(D-B);
    }
    else{
        var areaOne = (Math.abs(C) + Math.abs(A) ) * (Math.abs(D) + Math.abs(B));
    }
   
   
    if((G >= 0 && E >= 0) || (G <= 0 && E <= 0)){
        var areaTwo = Math.abs(G - E) * Math.abs(H-F);
    }
    else{
        var areaTwo = (Math.abs(G) + Math.abs(E) ) * (Math.abs(H) + Math.abs(F));
    }
   
    var overlap = 0;
    var overlapLength;
    var overlapHeight;
   
    console.log("Area One:",areaOne)
    console.log("Area Two:",areaTwo)
   
    if ((E <= C && E >= A) && ( H <= D && H >= B)){
       
        if(G<C){
            if(G<=0 && E <=0 || G>=0 && E >= 0){
                overlapLength = Math.abs(G-E)
            }
            else{
                overlapLength = (Math.abs(G) + Math.abs(E))
            }
        }
        else{
            if(E<=0 && C <=0 || E>=0 && C >= 0){
                overlapLength = Math.abs(E-C)
            }
            else{
                overlapLength = (Math.abs(E) + Math.abs(C))
            }
        }
       
        if(H<D){
            if(B<=0 && H <=0 || B>=0 && H >= 0){
                overlapHeight = Math.abs(F-H)
            }
            else{
                overlapHeight = (Math.abs(F) + Math.abs(H))
             }
           
        }else{
            if(B<=0 && D <=0 || B>=0 && D >= 0){
                overlapHeight = Math.abs(B-H)
            }
            else{
                overlapHeight = (Math.abs(B) + Math.abs(D))
             }
        }
        console.log("Length:",overlapLength )
        console.log("Height:",overlapHeight )
        overlap = overlapHeight * overlapLength;
    }
    console.log("overlap:",overlap)
   
   
    return areaOne + areaTwo - overlap;
   
};
