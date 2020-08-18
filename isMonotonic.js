var isMonotonic = function(A) {
    var equal = false;
    var increasing = true;
    var finalResult = true;
    for(var i=0; i<A.length; i++){
        for(var j=i+1; j<A.length; j++){
            if(j == 1){
                if(A[i] < A[j]){
                    increasing = true;
                    equal = false
                    continue;
                }
                if(A[i] > A[j]){
                    increasing = false;  
                    equal = false
                    continue;
                } 
                if(A[i] = A[j]){
                    equal = true;
                    increasing = false
                    continue;
                }

                
            }

            if(increasing == true && equal == false){

                if(A[i] > A[j]){
                    finalResult = false
                    return finalResult;
                }
                else if(A[i] <= A[j]){
                    finalResult = true
                }


            }
            if(increasing == false && equal == false){

                if(A[i] < A[j]){
                    finalResult = false
                    return false;
                }
                else if(A[i] >= A[j]){
                    finalResult = true;
                }
            }
            if(equal == true){

                if(A[i] > A[j]){
                    increasing = false
                    equal = false
  
                }
                if(A[i] < A[j]){
                    increasing = true
                    equal = false
                }


            }
        }
    }
    return finalResult
};