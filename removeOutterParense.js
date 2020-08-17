var removeOuterParentheses = function(S) {

    var closed = 0;
    var open = 0;
    var newS = ""
    for(var i=0; i<S.length; i++){
        if(S[i] == ")"){
            closed++
            if(closed == open){
                closed =0;
                open = 0;
                continue;
            }
            newS = newS + S[i];

            
        }
        if(S[i] == "("){
            open++
            if(open == 1){
                continue;
            }
            
            newS = newS + S[i];
        }


    }
    return newS;
};