//Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

//The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them. 

var generateTheString = function(n) {
    var string = "";
    
    while(string.length < n-1){
        var char = String.fromCharCode(97);
        string = string + char;
    }
    if(n % 2 == 0){
       string = string + String.fromCharCode(98); 
    }
    else{
        string = string + String.fromCharCode(97);
    }
    return string;
};