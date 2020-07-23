var fizzBuzz = function(n) {
    let output = [];
    let bool = true;
    for(var i=1; i<=n; i++){
        bool = true;
        if(i % 3 == 0 && i % 5 == 0){
            output.push("FizzBuzz");
            bool = false;
        }
        else if(i % 3 == 0){
            output.push("Fizz");
            bool = false;
        }
        else if(i % 5 == 0){
            output.push("Buzz");
            bool = false
        }
        else if(bool == true){
            num = i.toString();
            output.push(num);
        }
    }
    return output;
};