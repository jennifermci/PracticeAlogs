var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
            count++
            //2
        }
        else if(s[i] == ")"){
            if(max < count){
                max = count;
            }

            count--;
        }
    }
    return max;
};