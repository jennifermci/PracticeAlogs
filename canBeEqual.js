var canBeEqual = function(target, arr) {
    let object = {};
    let object2 = {}
    for(let i=0; i<target.length; i++){
        object[target[i]] ? object[target[i]]+=1 : object[target[i]] = 1;
        object2[arr[i]] ? object2[arr[i]]+=1 : object2[arr[i]] = 1;

    }


    for(let key in object){

        if(object2.hasOwnProperty(key)){
            if(object2[key] != object[key]){
                return false;
            }
        }
        else{
            return false
        }

    
    }
    return true;
};