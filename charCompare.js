var commonChars = function(A) {  
    var first = A[0];
    var arr = []
   
    for(var x=0; x<first.length; x++){ // loop through first word and compare each letter
        var bool = false;
        var indexArr = [];
        for(var i=1; i<A.length; i++){ //loop through each addition word for comparison
            var word = A[i];          
            for(var z=0; z<word.length; z++){ // loop through array and search for duplicate letter    
                if(word[z] == first[x]){  
                    indexArr.push(z)
                    break;
                }
            }
   
        }
            if(indexArr.length == A.length -1){
                arr.push(first[x])
                var index = 0;
                for(var j=1; j<A.length; j++){
                    var temp = A[j].split("")
                    for(var d=indexArr[index]; d<A[j].length; d++){
                        temp[d] = temp[d+1]
                    }
                    index++
                    temp.pop();
                    A[j] = temp.join("");

                }
     
            }
    }
    return arr;

};

var countCharacters = function(words, chars) {
    var count=0;
   for(var i=0; i<words.length; i++){
       var lettercount = 0;
       var temp = chars.split("");
       for(var x=0; x<words[i].length; x++){
           
           
           for(var t=0; t<temp.length; t++){
               if(words[i][x] == temp[t]){
                  for(var r=t; r<temp.length; r++){
                      temp[r] = temp[r+1];
                  }
                   // console.log("lettercount", lettercount)
                   // console.log(words[i][x])
                   temp.pop();
                   lettercount++;
                   break;
               }
           }
           
       }
       // console.log("lettercount", lettercount)
       // console.log(words[i].length)
       if(lettercount == words[i].length){
           count = count + words[i].length;
       }   
       


   } 
    return count;
};