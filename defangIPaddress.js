var defangIPaddr = function(address) {
    var newaddress = address.split("");
    console.log(newaddress);
    for(var i=0; i<newaddress.length; i++){
        if(newaddress[i] == "."){
            newaddress[i] = "[.]";
        }
    }
    return newaddress.join("");
    
};