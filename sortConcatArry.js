var relativeSortArray = function(arr1, arr2) {
    var output = [];
    var leftovers =[]
    for(var i=0; i<arr2.length; i++){
        var checker = arr2[i];

        for(var x=0; x<arr1.length; x++){
            if(arr1[x] == arr2[i]){
                output.push(arr1[x]);
                for(var t=x; t<arr1.length-1; t++ ){
                    arr1[t] = arr1[t+1];
                }
                arr1.pop()
                x--;
            } 
            
        }      

    }
    arr1.sort(function(a,b){return a-b} );
    return output.concat(arr1);
    
};


var relativeSortArray = function(arr1, arr2) {
    let h = {};
    for(let i=0;i<arr2.length;++i)  h[arr2[i]]=i;
    for(const i of arr1)    if(!(i in h))    h[i]=1000+i;
    arr1.sort((a,b)=>h[a]-h[b]);
    return arr1;
};