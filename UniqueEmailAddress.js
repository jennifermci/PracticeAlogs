var numUniqueEmails = function(emails) {
    var newArr = []
    for(var i=0; i<emails.length; i++){
        var bool = false
        var newEmail = ""
        for(var x=0; x<emails[i]; x++){
            if(emails[i][x] == "+"){
               while(emails[i][x] != "@"){
                   bool = true;
                   newEmail = newEmail + emails[i][x];
                   x++
               }
            }
            
            if(emails[i][x] == "." && bool==false){
               continue; 
            }
            else if(emails[i][x] == "." && bool==true){
                newEmail = newEmail + emails[i][x];
                continue
            }
            newEmail = newEmail + emails[i][x];
        }
        newArr.push(newEmail)
    }
    var count = 0
    for(var t=0; t<newArr.length; t++){
        
        for(var r=t; r<newArr.length; r++){
            if(newArr[t] == newArr[r]){
                c
            }
        }
    }
};