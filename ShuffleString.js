var restoreString = function(s, indices) {
    //var newString = s.split("");
    var results = [];
    for(var i=0; i<indices.length; i++){
        results[indices[i]] = s[i]

    }
    return results.join("");
    
    
};