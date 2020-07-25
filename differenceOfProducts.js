var subtractProductAndSum = function(n) {
    var newNum = Array.from(String(n), Number);
    var product =1;
    var sum =0;
    for(var i=0; i<newNum.length; i++){
        product = newNum[i] * product;
        sum = sum + newNum[i];
    }
    console.log(product);
    console.log(sum);
    var difference = product - sum;
    return difference;
};