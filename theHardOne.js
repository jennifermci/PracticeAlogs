var minimumAbsDifference = function(arr) {
   
    var dict = {}
    var minValue;
   
    for(var i=0; i<arr.length-1; i++){
       
        for(var x=i+1; x<arr.length; x++){
            var temp;
            var tempArr;
            if(arr[x] > arr[i]){
                temp = arr[x] - arr[i]
                tempArr = [arr[i], arr[x]]
                if(minValue == undefined){
                    minValue = temp;
                } else if(temp <= minValue){
                    minValue = temp;
                } else {
                    continue;
                }
            } else{
                temp = arr[i] - arr[x];
                tempArr = [arr[x], arr[i]]
                if(minValue == undefined){
                    minValue = temp;
                } else if(temp <= minValue){
                    minValue = temp;
                } else {
                    continue;
                }
            }

            if(dict[temp] == null && minValue == temp){
                dict[temp] = [];
            }
            dict[temp].push(tempArr)

        }
    }

   
    var results = dict[minValue].sort(function(a,b){return a[0]-b[0]})

    return results;
   
};