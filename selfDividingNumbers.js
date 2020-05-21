var selfDividingNumbers = function(left, right) {
    var numberArr = [];
    
    for(var i=left; i<=right; i++){
        //turns the numbers into strings
        var num = i.toString();
        var flag = false;
        for(var x=0; x<num.length; x++){
            //turns the string into numbers
            var Num = parseInt(num[x]);
            if(Num == 0){
                flag = true;
            }
            if(i % Num != 0){
                flag = true;
            }
        }
        if(flag == false){
            numberArr.push(i);
        }
    }
    return numberArr;
};