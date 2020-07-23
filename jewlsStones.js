var numJewelsInStones = function(J, S) {
    let count = 0;
    for(var i=0; i<S.length; i++){
        for(var x=0; x<J.length; x++){
            if(J[x] == S[i]){
                x++;
                count++
            }
        }
    }
    return count;
};