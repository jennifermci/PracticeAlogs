var groupThePeople = function(groupSizes) {
    let output = [];
    for(let i=0; i<groupSizes.length; i++){
        let tempArr = [];
        
        if(groupSizes[i] != 1 && groupSizes[i] != ""){
            
           tempArr.push(i);
            for(let x=i+1; x<groupSizes.length; x++){
            
                if(tempArr.includes(x) == false && groupSizes[i] !== ""){               


                    if(groupSizes[i] == groupSizes[x] && tempArr.length < groupSizes[i]){
                        tempArr.push(x);
                        groupSizes[x] = "";
                    }
                }

            }
            groupSizes[i] = ""
        }
       else if(groupSizes[i]== 1){
           
           tempArr.push(i)
           groupSizes[i] = ""
       }

        if(tempArr.length != 0){
           output.push(tempArr) 
        }
        
    }
    
    return output;
};